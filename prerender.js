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
            const { helmet } = helmetContext;

            console.log(`🔍 Ruta [${url}] ➜ Renderizados ${appHtml ? appHtml.length : 0} caracteres.`);

            // Inyectar el árbol de React en el contenedor root
            let finalHtml = cleanTemplate.replace(
                '<div id="root"></div>',
                `<div id="root">${appHtml}</div>`
            )

            // 🌟 CORRECCIÓN CRÍTICA 1: Reemplazar metadatos en el <head> evitando duplicados genéricos
            if (helmet) {
                const titleHtml = helmet.title.toString();
                const metaHtml = helmet.meta.toString();
                const linkHtml = helmet.link.toString();

                // Si Helmet generó datos específicos, removemos los tags por defecto de index.html
                if (titleHtml) {
                    finalHtml = finalHtml.replace(/<title>.*?<\/title>/i, '');
                }
                if (metaHtml.includes('description')) {
                    finalHtml = finalHtml.replace(/<meta name="description"[-_a-zA-Z0-9="' ]*content=".*?"\s*\/?>/i, '');
                }

                // Limpiar keywords y canonicals antiguos del head base para evitar ruido
                finalHtml = finalHtml.replace(/<meta name="keywords".*?\/?>/i, '');
                finalHtml = finalHtml.replace(/<link rel="canonical".*?\/?>/i, '');
                finalHtml = finalHtml.replace(/<meta property="og:url".*?\/?>/i, '');

                // Inyectamos las nuevas etiquetas limpias justo antes del cierre de </head>
                finalHtml = finalHtml.replace(
                    '</head>',
                    `${titleHtml}${metaHtml}${linkHtml}</head>`
                );
            }

            // 🌟 CORRECCIÓN CRÍTICA 2: Sanear el <body> de etiquetas SEO duplicadas por React 19
            const [headPart, bodyPart] = finalHtml.split('<body>');
            if (bodyPart) {
                let sanitizedBody = bodyPart;

                // Removemos de forma selectiva del body cualquier tag que deba existir únicamente en el head
                sanitizedBody = sanitizedBody.replace(/<title>.*?<\/title>/gi, '');
                sanitizedBody = sanitizedBody.replace(/<meta[^>]*name="description"[^>]*>/gi, '');
                sanitizedBody = sanitizedBody.replace(/<meta[^>]*property="og:[^>]*>/gi, '');
                sanitizedBody = sanitizedBody.replace(/<link[^>]*rel="canonical"[^>]*>/gi, '');

                finalHtml = `${headPart}<body>${sanitizedBody}`;
            }





            // Determinar ruta del archivo final (ejemplo: /trayectoria se convierte en /trayectoria/index.html)
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