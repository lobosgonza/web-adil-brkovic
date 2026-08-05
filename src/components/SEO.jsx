import { useEffect } from 'react';

export default function SEO({ title, description, canonical, ogUrl }) {
	// 1. En el cliente (navegador), actualizamos el título del tab limpiamente sin duplicar elementos
	useEffect(() => {
		if (title) {
			document.title = title;
		}
	}, [title]);

	// Retornamos los metadatos para que renderToString() los genere en el string HTML
	return (
		<>
			{title && <title>{title}</title>}
			{description && <meta name='description' content={description} />}
			{canonical && <link rel='canonical' href={canonical} />}
			{ogUrl && <meta property='og:url' content={ogUrl} />}
		</>
	);
}
