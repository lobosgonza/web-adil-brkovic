import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { SitemapStream, streamToPromise } from 'sitemap'
import { STATIC_ROUTES, AREAS_TRABAJO } from './src/constants/routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outputPath = path.resolve(__dirname, 'dist/sitemap.xml')

// 1. Configura aquí las rutas que quieres que Google indexe
const links = [
    ...STATIC_ROUTES.map(route => ({
        url: route,
        changefreq: route === '/' ? 'weekly' : 'monthly',
        priority: route === '/' ? 1.0 : 0.8
    })),
    ...AREAS_TRABAJO.map(area => ({
        url: `/areas-de-trabajo/${area.id}`,
        changefreq: 'monthly',
        priority: 0.7
    }))
];

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