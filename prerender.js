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

            // Inyectar etiquetas del <head> (título, meta, canonical)
            if (helmet) {
                finalHtml = finalHtml.replace(
                    '</head>',
                    `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}</head>`
                );
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