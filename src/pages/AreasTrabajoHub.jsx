import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroSecondary } from '../components/HeroSecondary';
import { ServiceCard } from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { contenidos } from '../data/areasDeTrabajo';
import DynamicSchema from '../components/DynamicSchema'; // 👈 Importar

const ServiciosHub = () => {
	const pageUrl = 'https://estudiobrkovic.cl/areas-de-trabajo';

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	// Schema para el Hub General de Servicios
	const hubSchema = {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name: 'Áreas de Especialización | Estudio Jurídico Brkovic',
		url: 'https://brkovicabogados.cl/areas-de-trabajo',
		description: 'Despacho especializado en litigación estratégica, defensa administrativa y causas de alto impacto social en Chile.',
		breadcrumb: {
			'@type': 'BreadcrumbList',
			itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://brkovicabogados.cl/' },
				{ '@type': 'ListItem', position: 2, name: 'Áreas de Trabajo', item: 'https://brkovicabogados.cl/areas-de-trabajo' },
			],
		},
	};
	const renderCard = (id) => {
		const data = contenidos[id];
		return <ServiceCard title={data.titulo} description={data.titleSecondary} link={`/areas-de-trabajo/${id}`} image={data.imagen} attribution={data.creditoFoto} />;
	};

	return (
		<>
			<Helmet>
				<title>Áreas de Especialización | Adil Brkovic</title>
				<link rel='canonical' href={pageUrl} />
				<meta name='description' content='Despacho especializado en litigación estratégica, defensa administrativa y causas de alto impacto social en Chile.' />
				<meta property='og:title' content='Áreas de Especialización | Adil Brkovic' />
				<meta property='og:url' content={pageUrl} />
			</Helmet>

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
