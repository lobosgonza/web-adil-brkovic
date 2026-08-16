import { contenidos } from '@/data/areasDeTrabajo';

export default async function sitemap() {
    const baseUrl = 'https://estudiobrkovic.cl';

    // 1. Rutas estáticas principales
    const staticRoutes = [
        '',
        '/trayectoria',
        '/areas-de-trabajo',
        '/politica-de-privacidad',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
    }));

    // 2. Rutas dinámicas generadas desde tu archivo contenidos
    const areaRoutes = Object.keys(contenidos).map((slug) => ({
        url: `${baseUrl}/areas-de-trabajo/${slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [...staticRoutes, ...areaRoutes];
}