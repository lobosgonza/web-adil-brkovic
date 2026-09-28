import { contenidos } from '@/data/areasDeTrabajo';
import { noticias } from '@/data/prensa';
import { notFound } from 'next/navigation';
import ServiceClient from './ServiceClient';

export async function generateStaticParams() {
	return Object.keys(contenidos).map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
	const { id } = await params;
	const data = contenidos[id];
	if (!data) return { title: 'Área no encontrada' };

	const cleanDescription = data.descripcion.replace(/\*\*/g, '').slice(0, 160) + '...';

	return {
		title: `${data.titulo} | Estudio Jurídico Brkovic`,
		description: cleanDescription,
		alternates: {
			canonical: `https://estudiobrkovic.cl/areas-de-trabajo/${id}`,
		},
		openGraph: {
			title: `${data.titulo} | Estudio Jurídico Brkovic`,
			description: cleanDescription,
			url: `https://estudiobrkovic.cl/areas-de-trabajo/${id}`,
			type: 'article',
			images: [{ url: data.imagen, alt: data.titulo }],
		},
		twitter: {
			card: 'summary_large_image',
			title: `${data.titulo} | Estudio Jurídico Brkovic`,
			description: cleanDescription,
			images: [data.imagen],
		},
	};
}

export default async function ServicioPage({ params }) {
	const { id } = await params;
	const data = contenidos[id];
	if (!data) notFound();

	const noticiasArea = noticias.filter((n) => n.tag === id);

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
		areaServed: {
			'@type': 'Country',
			name: 'Chile',
		},
		url: `https://estudiobrkovic.cl/areas-de-trabajo/${id}`,
	};

	const breadcrumbSchema = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Inicio',
				item: 'https://estudiobrkovic.cl',
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: 'Áreas de Trabajo',
				item: 'https://estudiobrkovic.cl/areas-de-trabajo',
			},
			{
				'@type': 'ListItem',
				position: 3,
				name: data.titulo,
				item: `https://estudiobrkovic.cl/areas-de-trabajo/${id}`,
			},
		],
	};

	return (
		<>
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
			<ServiceClient id={id} data={data} noticiasArea={noticiasArea} />
		</>
	);
}
