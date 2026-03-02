import { useEffect } from 'react';
import { HeroSecondary } from '../components/HeroSecondary';
import { ServiceCard } from '../components/ServiceCard';
import CTASection from '../components/CTASection';

const ServiciosHub = () => {
	useEffect(() => {
		document.title = 'Areas de Trabajo | Adil Brkovic';
		window.scrollTo(0, 0);
	}, []);

	// URLs de imágenes estandarizadas
	const images = {
		ddhh: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop',
		comunidades: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop',
		indemnizaciones: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop',
		administrativa: 'https://images.unsplash.com/photo-1423592707957-3b212afa6733?q=80&w=600&auto=format&fit=crop',
		previsional: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=600&auto=format&fit=crop',
	};

	return (
		<div className='bg-[#F4F7F6] min-h-screen font-sans'>
			{/* 1. HERO OSCURO INSTITUCIONAL */}
			<HeroSecondary title='ÁREAS DE ESPECIALIZACIÓN' subtitle='SOLUCIONES JURÍDICAS DE ALTA COMPLEJIDAD' />

			<section className='py-24 px-8 max-w-7xl mx-auto'>
				{/* Introducción de la página */}
				<div className='mb-20 max-w-3xl'>
					<h2 className='text-3xl md:text-4xl font-display font-semibold text-[#2c3e50] uppercase tracking-tighter mb-6'>Experiencia técnica al servicio de la justicia</h2>
					<p className='text-[#778696] font-light text-lg leading-relaxed'>
						Nuestro despacho se especializa en litigación estratégica y defensa administrativa, con un enfoque particular en causas de alto impacto social y derechos fundamentales.
					</p>
					<div className='w-20 h-1 bg-[#e67e22] mt-8'></div>
				</div>

				{/* 2. GRILLA EQUIVALENTE AL HOME (MD:6) */}
				<div className='grid grid-cols-1 md:grid-cols-6 gap-8'>
					{/* Fila 1: Áreas Principales (3 + 3) */}
					<div className='md:col-span-3'>
						<ServiceCard
							title='Reparación y Derechos Humanos'
							description='Lideramos procesos de reparación civil para víctimas de violaciones a los DD.HH., con una trayectoria de más de 30 años en causas históricas contra el Estado.'
							link='/servicio/reparacion-ddhh'
							image={images.ddhh}
						/>
					</div>
					<div className='md:col-span-3'>
						<ServiceCard
							title='Defensa de Comunidades'
							description='Protección jurídica de grupos humanos frente a daños socioambientales, conflictos mineros, sanitarios o inmobiliarios que afecten su calidad de vida.'
							link='/servicio/defensa-comunidades'
							image={images.comunidades}
						/>
					</div>

					{/* Fila 2: Áreas Especializadas (2 + 2 + 2) */}
					<div className='md:col-span-2'>
						<ServiceCard
							title='Litigios Indemnizatorios'
							description='Especialistas en negligencias médicas, accidentes laborales y responsabilidad civil para obtener restituciones justas.'
							link='/servicio/litigios-indemnizatorios'
							image={images.indemnizaciones}
						/>
					</div>
					<div className='md:col-span-2'>
						<ServiceCard
							title='Defensa Administrativa'
							description='Asesoría técnica en sumarios administrativos y procesos sancionatorios frente a organismos del Estado y entes reguladores.'
							link='/servicio/defensa-administrativa'
							image={images.administrativa}
						/>
					</div>
					<div className='md:col-span-2'>
						<ServiceCard
							title='Justicia Previsional'
							description='Regularización de PGU y pensiones para beneficiarios de Ley Valech y Exonerados Políticos ante el Instituto de Previsión Social.'
							link='/servicio/justicia-previsional'
							image={images.previsional}
						/>
					</div>
				</div>
			</section>

			{/* 3. CIERRE DE PÁGINA (CTA COMPLETO) */}
			{/* CTA DE CIERRE */}
			<CTASection backTo='/' backText='Volver al Home' />
		</div>
	);
};

export default ServiciosHub;
