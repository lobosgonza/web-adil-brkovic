import { useEffect } from 'react';

export default function SEO({ title, description, canonical, ogUrl }) {
	// 1. En el cliente (navegador), actualizamos el título del tab limpiamente sin duplicar elementos
	useEffect(() => {
		if (title) {
			document.title = title;
		}
	}, [title]);

	// 🌟 CORRECCIÓN: Si es el navegador REAL (no el prerender), no renderizamos HTML
	if (typeof window !== 'undefined' && !window.__IS_PRERENDER__) {
		return null;
	}

	// 3. En el servidor (Prerender), renderizamos las etiquetas para que tu script las capture e inyecte en el <head>
	return (
		<>
			<title>{title}</title>
			<meta name='description' content={description} />
			{canonical && <link rel='canonical' href={canonical} />}
			{ogUrl && <meta property='og:url' content={ogUrl} />}
		</>
	);
}
