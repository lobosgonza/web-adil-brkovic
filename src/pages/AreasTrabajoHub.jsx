import { useEffect } from 'react';

import { HeroSecondary } from '../components/HeroSecondary';
import { ServiceCard } from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { contenidos } from '../data/areasDeTrabajo';
import DynamicSchema from '../components/DynamicSchema'; // 👈 Importar
import SEO from '../components/SEO';
const ServiciosHub = () => {
	const pageUrl = 'https://estudiobrkovic.cl/areas-de-trabajo/';

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	// Schema para el Hub General de Servicios
	const hubSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: 'Áreas de Especialización Jurídica | Estudio Jurídico Brkovic',
		url: 'https://estudiobrkovic.cl/areas-de-trabajo/',
		description: 'Despacho especializado en litigación estratégica, defensa administrativa y causas de alto impacto social en Chile.',
		breadcrumb: {
			'@type': 'BreadcrumbList',
			itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://estudiobrkovic.cl/' },
				{ '@type': 'ListItem', position: 2, name: 'Áreas de Trabajo', item: 'https://estudiobrkovic.cl/areas-de-trabajo/' },
			],
		},
	};
	const renderCard = (id) => {
		const data = contenidos[id];
		return <ServiceCard title={data.titulo} description={data.titleSecondary} link={`/areas-de-trabajo/${id}/`} image={data.imagen} attribution={data.creditoFoto} />;
	};

	return (
		<>
			<SEO
				title='Áreas de Especialización | Adil Brkovic'
				description='Despacho especializado en litigación estratégica, defensa administrativa y causas de alto impacto social en Chile.'
				canonical={pageUrl}
				ogUrl={pageUrl}
			/>

			<div className='bg-[#F4F7F6] min-h-screen font-sans'>
				{/* 🌟 INYECCIÓN SÍNCRONA DEL SCHEMA */}
				<DynamicSchema schemaData={hubSchema} />
				{/* 1. HERO OSCURO INSTITUCIONAL */}
				<HeroSecondary title='ÁREAS DE ESPECIALIZACIÓN' subtitle='SOLUCIONES JURÍDICAS DE ALTA COMPLEJIDAD' image='/img/justicia-previsional-corte-suprema.webp' />

				<section className='py-24 px-8 max-w-7xl mx-auto'>
					{/* Introducción de la página */}
					<div className='mb-20 max-w-3xl'>
						<h2 className='text-3xl md:text-4xl font-display font-semibold text-[#2c3e50] uppercase tracking-tighter mb-6'>Experiencia técnica al servicio de la justicia</h2>
						<p className='text-[#778696] font-light text-lg leading-relaxed'>
							Nuestro despacho se especializa en litigación estratégica y defensa administrativa, con un enfoque particular en causas de alto impacto social y derechos
							fundamentales.
						</p>
						<div className='w-20 h-1 bg-[#e67e22] mt-8'></div>
					</div>

					{/* 2. GRILLA EQUIVALENTE AL HOME (MD:6) */}
					<div className='grid grid-cols-1 md:grid-cols-6 gap-8'>
						<div className='md:col-span-3'>{renderCard('litigios-indemnizatorios')}</div>
						<div className='md:col-span-3'>{renderCard('reparacion-ddhh')}</div>
						<div className='md:col-span-2'>{renderCard('defensa-comunidades')}</div>

						<div className='md:col-span-2'>{renderCard('defensa-administrativa')}</div>
						<div className='md:col-span-2'>{renderCard('justicia-previsional')}</div>
					</div>
				</section>

				{/* 3. CIERRE DE PÁGINA (CTA COMPLETO) */}
				{/* CTA DE CIERRE */}
				<CTASection backTo='/' backText='Volver al Home' />
			</div>
		</>
	);
};

export default ServiciosHub;
