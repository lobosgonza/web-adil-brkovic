import { contenidos } from '@/data/areasDeTrabajo';

const LAST_MODIFIED = '2026-09-01';

export default async function sitemap() {
	const baseUrl = 'https://estudiobrkovic.cl';

	const staticRoutes = ['', '/trayectoria', '/areas-de-trabajo', '/politica-de-privacidad'].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: LAST_MODIFIED,
		changeFrequency: route === '' ? 'weekly' : 'monthly',
		priority: route === '' ? 1.0 : 0.8,
	}));

	const areaRoutes = Object.keys(contenidos).map((slug) => ({
		url: `${baseUrl}/areas-de-trabajo/${slug}`,
		lastModified: LAST_MODIFIED,
		changeFrequency: 'monthly',
		priority: 0.7,
	}));

	return [...staticRoutes, ...areaRoutes];
}