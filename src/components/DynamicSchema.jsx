// src/components/DynamicSchema.jsx
import { useEffect } from 'react';

export default function DynamicSchema({ schemaData }) {
	useEffect(() => {
		// 1. Limpiar esquemas previos si existen (evita duplicados al navegar)
		const existingScript = document.getElementById('dynamic-schema');
		if (existingScript) {
			existingScript.remove();
		}

		// 2. Crear el nuevo script con el schema de la página actual
		const script = document.createElement('script');
		script.id = 'dynamic-schema';
		script.type = 'application/ld+json';
		script.innerHTML = JSON.stringify(schemaData);

		document.head.appendChild(script);

		// Limpieza cuando el componente se desmonta
		return () => {
			const scriptToRemove = document.getElementById('dynamic-schema');
			if (scriptToRemove) {
				scriptToRemove.remove();
			}
		};
	}, [schemaData]);

	return null; // Este componente no renderiza nada visual
}
