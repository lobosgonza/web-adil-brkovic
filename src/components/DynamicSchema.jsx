// src/components/DynamicSchema.jsx
import { useEffect } from 'react';

export default function DynamicSchema({ schemaData }) {
	// Limpieza en el cliente cuando cambies de página (SPA)
	useEffect(() => {
		return () => {
			const oldScript = document.getElementById('dynamic-schema');
			if (oldScript) oldScript.remove();
		};
	}, [schemaData]);

	// Esto se ejecuta SÍNCRONAMENTE durante el render, tanto en Node como en el navegador.
	// Al prerenderizar, el script se inyectará exactamente en el lugar donde llames al componente.
	return <script id='dynamic-schema' type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />;
}
