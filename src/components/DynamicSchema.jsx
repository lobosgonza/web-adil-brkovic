// src/components/DynamicSchema.jsx
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function DynamicSchema({ schemaData }) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		return () => {
			const scriptToRemove = document.getElementById('dynamic-schema');
			if (scriptToRemove) scriptToRemove.remove();
		};
	}, [schemaData]); // Se ejecuta si cambia el schemaData

	const scriptTag = <script id='dynamic-schema' type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />;

	// Si estamos en el servidor/prerenderizador, document.head existe síncronamente
	if (typeof window === 'undefined') {
		return createPortal(scriptTag, document.head);
	}

	// Si estamos en el navegador del cliente
	return mounted ? createPortal(scriptTag, document.head) : null;
}
