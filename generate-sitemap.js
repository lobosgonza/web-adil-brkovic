import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { SitemapStream, streamToPromise } from 'sitemap'
import { STATIC_ROUTES, AREAS_TRABAJO } from './src/constants/routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outputPath = path.resolve(__dirname, 'dist/sitemap.xml')

// 1. Configura aquí las rutas que quieres que Google indexe
const links = [
    { url: '/', changefreq: 'weekly', priority: 1.0 },
    { url: '/trayectoria/', changefreq: 'monthly', priority: 0.8 },
    { url: '/areas-de-trabajo/', changefreq: 'monthly', priority: 0.8 },
    { url: '/politica-de-privacidad/', changefreq: 'yearly', priority: 0.3 },
    // Tus servicios dinámicos
    { url: '/areas-de-trabajo/litigios-indemnizatorios/', changefreq: 'monthly', priority: 0.7 },
    { url: '/areas-de-trabajo/reparacion-ddhh/', changefreq: 'monthly', priority: 0.7 },
    { url: '/areas-de-trabajo/defensa-comunidades/', changefreq: 'monthly', priority: 0.7 },
    { url: '/areas-de-trabajo/defensa-administrativa/', changefreq: 'monthly', priority: 0.7 },
    { url: '/areas-de-trabajo/justicia-previsional/', changefreq: 'monthly', priority: 0.7 }
]

async function generate() {
    console.log('🗺️  Generando sitemap.xml para estudiobrkovic.cl...')

    try {
        // Asegurarse de que la carpeta dist exista antes de guardar
        if (!fs.existsSync(path.resolve(__dirname, 'dist'))) {
            fs.mkdirSync(path.resolve(__dirname, 'dist'), { recursive: true })
        }

        const stream = new SitemapStream({ hostname: 'https://estudiobrkovic.cl' })

        // Escribir los enlaces en el canal de datos
        links.forEach(link => stream.write(link))
        stream.end()

        // Convertir el flujo a un string XML legible
        const sitemapOutput = await streamToPromise(stream)

        // Guardar el archivo directamente en la carpeta dist para que se suba a Vercel
        fs.writeFileSync(outputPath, sitemapOutput.toString(), 'utf-8')

        console.log('✅ ¡sitemap.xml generado con éxito absoluto en dist/sitemap.xml!');
    } catch (error) {
        console.error('❌ Error al generar el sitemap:', error)
    }
}

generate()