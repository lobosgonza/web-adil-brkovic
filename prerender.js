import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'
import { STATIC_ROUTES, AREAS_TRABAJO } from './src/constants/routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

// 🔗 Unión automatizada: Genera la lista única de rutas combinando estáticas y dinámicas
const routesToPrerender = [
    ...STATIC_ROUTES,
    ...AREAS_TRABAJO.map(area => `/areas-de-trabajo/${area.id}`)
];

async function run() {
    console.log('📦 Iniciando Prerenderizado Automatizado Multiruta para Adil Brkovic...')

    // Simulaciones completas para silenciar los ciclos internos de Framer Motion en Node
    globalThis.window = {
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

    // 1. Inicializar el compilador en modo servidor
    const vite = await createServer({
        server: { middlewareMode: true },
        appType: 'custom'
    })

    try {
        const templatePath = toAbsolute('dist/index.html')
        if (!fs.existsSync(templatePath)) {
            console.error('❌ No se encontró dist/index.html. Primero corre vite build.')
            await vite.close()
            process.exit(1)
        }

        // Leer la base de HTML que escupió el cliente
        const rawTemplate = fs.readFileSync(templatePath, 'utf-8')
        const doctypeIndex = rawTemplate.indexOf('<!doctype html>')
        const cleanTemplate = doctypeIndex === -1 ? rawTemplate : rawTemplate.substring(doctypeIndex)

        // Cargar el entry-server
        const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')

        // 2. Iterar por cada ruta del sitio web
        for (const url of routesToPrerender) {
            const helmetContext = {};
            const appHtml = render(url, helmetContext)

            console.log(`🔍 Ruta [${url}] ➜ Renderizados ${appHtml ? appHtml.length : 0} caracteres.`);

            // Inyectar el árbol de React en el contenedor root
            let finalHtml = cleanTemplate.replace(
                '<div id="root"></div>',
                `<div id="root">${appHtml}</div>`
            )

            // 🌟 ESTRATEGIA EXCLUSIVA PARA REACT 19: Extraer del Body y Mudar al Head
            const bodyTagMatch = finalHtml.match(/<body[^>]*>/i);
            if (bodyTagMatch) {
                const splitIndex = finalHtml.indexOf(bodyTagMatch[0]) + bodyTagMatch[0].length;
                const headPart = finalHtml.substring(0, splitIndex);
                let bodyPart = finalHtml.substring(splitIndex);

                // 1. Capturar las etiquetas reales que React 19 escribió en el cuerpo
                const extractedTitle = bodyPart.match(/<title>.*?<\/title>/i);
                const extractedDesc = bodyPart.match(/<meta[^>]*name="description"[^>]*>/i);
                const extractedOgTitle = bodyPart.match(/<meta[^>]*property="og:title"[^>]*>/i);
                const extractedOgUrl = bodyPart.match(/<meta[^>]*property="og:url"[^>]*>/i);
                const extractedCanonical = bodyPart.match(/<link[^>]*rel="canonical"[^>]*>/i);

                // 2. Limpiar el cuerpo por completo (Evita duplicados en el body)
                bodyPart = bodyPart.replace(/<title>.*?<\/title>/gi, '');
                bodyPart = bodyPart.replace(/<meta[^>]*name="description"[^>]*>/gi, '');
                bodyPart = bodyPart.replace(/<meta[^>]*property="og:[^>]*>/gi, '');
                bodyPart = bodyPart.replace(/<link[^>]*rel="canonical"[^>]*>/gi, '');

                // Reconstruir estructura intermedia
                finalHtml = `${headPart}${bodyPart}`;

                // 3. Limpiar los metadatos genéricos antiguos del <head> de index.html
                if (extractedTitle) finalHtml = finalHtml.replace(/<title>.*?<\/title>/i, '');
                if (extractedDesc) finalHtml = finalHtml.replace(/<meta name="description"[-_a-zA-Z0-9="' ]*content=".*?"\s*\/?>/i, '');
                finalHtml = finalHtml.replace(/<link rel="canonical".*?\/?>/i, '');
                finalHtml = finalHtml.replace(/<meta property="og:url".*?\/?>/i, '');
                finalHtml = finalHtml.replace(/<meta property="og:title".*?\/?>/i, '');
                finalHtml = finalHtml.replace(/<meta name="keywords".*?\/?>/i, ''); // Limpieza preventiva de keywords obsoletas

                // 4. Inyectar las etiquetas específicas rescatadas dentro del <head> legítimo
                let headInjections = '';
                if (extractedTitle) headInjections += extractedTitle[0];
                if (extractedDesc) headInjections += extractedDesc[0];
                if (extractedOgTitle) headInjections += extractedOgTitle[0];
                if (extractedOgUrl) headInjections += extractedOgUrl[0];
                if (extractedCanonical) headInjections += extractedCanonical[0];

                finalHtml = finalHtml.replace('</head>', `${headInjections}</head>`);
            }

            // Determinar ruta del archivo final
            const fileName = url === '/' ? 'index.html' : `${url}/index.html`
            const outputPath = toAbsolute(`dist/${fileName}`)

            // Crear los directorios automáticamente si no existen
            fs.mkdirSync(path.dirname(outputPath), { recursive: true })
            fs.writeFileSync(outputPath, finalHtml, 'utf-8')
        }

        console.log('¡🚀 Prerenderizado por rutas completado con éxito absoluto!');

    } catch (e) {
        console.error('❌ Error crítico durante el prerenderizado:', e)
    } finally {
        await vite.close()
        console.log('🛑 Servidor cerrado de forma limpia.');
        process.exit(0)
    }
}

run()