import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import { STATIC_ROUTES, AREAS_TRABAJO } from './src/constants/routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const routesToPrerender = [
    ...STATIC_ROUTES,
    ...AREAS_TRABAJO.map(area => `/areas-de-trabajo/${area.id}`)
];

async function run() {
    console.log('📦 Iniciando Prerenderizado Optimizado para React 19...')

    globalThis.window = {
        __IS_PRERENDER__: true,
        location: { pathname: '/' },
        innerWidth: 1920,
        innerHeight: 1080,
        scrollTo: () => { },
        addEventListener: () => { },
        removeEventListener: () => { },
        matchMedia: () => ({
            matches: false,
            addEventListener: () => { },
            removeEventListener: () => { },
            addListener: () => { },
            removeListener: () => { }
        }),
    };
    globalThis.document = {
        addEventListener: () => { },
        removeEventListener: () => { },
        querySelector: () => null,
    };

    const vite = await createServer({
        server: { middlewareMode: true },
        appType: 'custom'
    })

    try {
        const templatePath = toAbsolute('dist/index.html')
        if (!fs.existsSync(templatePath)) {
            console.error('❌ No se encontró dist/index.html. Primero corre vite build.');
            await vite.close()
            process.exit(1)
        }

        const rawTemplate = fs.readFileSync(templatePath, 'utf-8')
        const doctypeIndex = rawTemplate.indexOf('<!doctype html>')
        const cleanTemplate = doctypeIndex === -1 ? rawTemplate : rawTemplate.substring(doctypeIndex)

        const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')

        for (const url of routesToPrerender) {
            // 1. Renderizar la ruta obteniendo el HTML nativo de React 19
            const appHtml = render(url)

            console.log(`🔍 Ruta [${url}] ➜ Renderizados ${appHtml ? appHtml.length : 0} caracteres.`);

            // 2. Capturar las etiquetas SEO directamente desde la salida de React 19
            const titleMatch = appHtml.match(/<title>.*?<\/title>/i);
            const descMatch = appHtml.match(/<meta[^>]*name="description"[^>]*>/i);
            const ogTitleMatch = appHtml.match(/<meta[^>]*property="og:title"[^>]*>/i);
            const ogUrlMatch = appHtml.match(/<meta[^>]*property="og:url"[^>]*>/i);
            const canonicalMatch = appHtml.match(/<link[^>]*rel="canonical"[^>]*>/i);

            // 3. Limpiar appHtml de etiquetas SEO para dejar el árbol de #root impecable
            let cleanAppHtml = appHtml;
            cleanAppHtml = cleanAppHtml.replace(/<title>.*?<\/title>/gi, '');
            cleanAppHtml = cleanAppHtml.replace(/<meta[^>]*name="description"[^>]*>/gi, '');
            cleanAppHtml = cleanAppHtml.replace(/<meta[^>]*property="og:[^>]*>/gi, '');
            cleanAppHtml = cleanAppHtml.replace(/<link[^>]*rel="canonical"[^>]*>/gi, '');

            // 4. Inyectar el HTML limpio en el contenedor root del index de base
            let finalHtml = cleanTemplate.replace(
                '<div id="root"></div>',
                `<div id="root">${cleanAppHtml}</div>`
            )

            // 5. Limpieza TOTAL de metadatos antiguos por defecto en el <head> del template usando /gi
            finalHtml = finalHtml.replace(/<title>.*?<\/title>/gi, '');
            finalHtml = finalHtml.replace(/<meta[^>]*name="description"[^>]*>/gi, '');
            finalHtml = finalHtml.replace(/<link[^>]*rel="canonical"[^>]*>/gi, '');
            finalHtml = finalHtml.replace(/<meta[^>]*property="og:url"[^>]*>/gi, '');
            finalHtml = finalHtml.replace(/<meta[^>]*property="og:title"[^>]*>/gi, '');
            finalHtml = finalHtml.replace(/<meta[^>]*name="keywords"[^>]*>/gi, '');
            finalHtml = finalHtml.replace(/<meta[^>]*property="og:description"[^>]*>/gi, '');
            finalHtml = finalHtml.replace(/<meta[^>]*name="twitter:description"[^>]*>/gi, '');

            // 6. Construir el bloque único e higienizado de inyecciones para el Head
            let headInjections = '';
            if (titleMatch) headInjections += titleMatch[0];
            if (descMatch) headInjections += descMatch[0];
            if (ogTitleMatch) headInjections += ogTitleMatch[0];
            if (ogUrlMatch) headInjections += ogUrlMatch[0];
            if (canonicalMatch) headInjections += canonicalMatch[0];

            // 7. Inyectar limpiamente al final de las etiquetas del head original antes de su cierre
            finalHtml = finalHtml.replace('</head>', `${headInjections}</head>`);

            // Determinar ruta del archivo final y guardar
            const fileName = url === '/' ? 'index.html' : `${url}/index.html`
            const outputPath = toAbsolute(`dist/${fileName}`)

            fs.mkdirSync(path.dirname(outputPath), { recursive: true })
            fs.writeFileSync(outputPath, finalHtml, 'utf-8')
        }

        console.log('¡🚀 Prerenderizado completado con éxito absoluto y sin duplicados!');

    } catch (e) {
        console.error('❌ Error crítico durante el prerenderizado:', e)
    } finally {
        await vite.close()
        console.log('🛑 Servidor cerrado de forma limpia.');
        process.exit(0)
    }
}

run()