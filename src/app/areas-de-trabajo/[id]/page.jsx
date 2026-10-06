import { contenidos } from '@/data/areasDeTrabajo';
import { noticias } from '@/data/prensa'; // Importamos la lista de prensa
import { notFound } from 'next/navigation';
import ServiceClient from './ServiceClient';

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

	// MATCH AUTOMÁTICO: Filtra solo las noticias que coinciden con el ID del área
	const noticiasArea = noticias.filter((item) => item.tag === id);

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
			{/* Pasamos noticiasArea como prop al cliente */}
			<ServiceClient id={id} data={data} noticiasArea={noticiasArea} />
		</>
	);
}
