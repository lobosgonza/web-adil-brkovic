import { contenidos } from '@/data/areasDeTrabajo';
import { notFound } from 'next/navigation';
import ServiceClient from './ServiceClient';

// METADATOS SSR DINÁMICOS POR ÁREA
export async function generateMetadata({ params }) {
	const { id } = await params;
	const data = contenidos[id];

	if (!data) return { title: 'Área no encontrada' };

	return {
		title: `${data.titulo} | Adil Brkovic`,
		description: data.resumenHome,
		alternates: {
			canonical: `https://estudiobrkovic.cl/areas-de-trabajo/${id}`,
		},
	};
}

export default async function ServicioPage({ params }) {
	const { id } = await params;
	const data = contenidos[id];

	if (!data) notFound();

	// Schema JSON-LD directo en el servidor
	const serviceSchema = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: data.titulo,
		description: data.resumenHome,
		provider: {
			'@type': 'LegalService',
			name: 'Estudio Jurídico Brkovic',
			url: 'https://estudiobrkovic.cl/',
		},
		serviceType: 'LegalService',
		url: `https://estudiobrkovic.cl/areas-de-trabajo/${id}`,
	};

	return (
		<>
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
			<ServiceClient id={id} data={data} />
		</>
	);
}
