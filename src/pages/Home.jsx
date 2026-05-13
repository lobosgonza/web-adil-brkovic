import { HeroHome } from '../components/HeroHome';
import { ServiceCard } from '../components/ServiceCard';
import { WhatsAppCTA } from '../components/WhatsAppCTA'; // SIN llaves
import { ImageText } from '../components/ImageText';
import CTASection from '../components/CTASection'; // SIN llaves
import { contenidos } from '../data/areasDeTrabajo';
// Datos centralizados para las imágenes y contenido (SEO: Alt texts incluidos)
const serviciosData = {
	ddhh: {
		url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop',
		alt: 'Mazo de justicia y libros legales - Especialidad en Derechos Humanos',
	},
	comunidades: {
		url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop',
		alt: 'Paisaje natural protegido - Defensa jurídica de comunidades y medio ambiente',
	},
	indemnizaciones: {
		url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop',
		alt: 'Firma de documentos legales para contratos e indemnizaciones',
	},
	administrativa: {
		url: 'https://images.unsplash.com/photo-1423592707957-3b212afa6733?q=80&w=600&auto=format&fit=crop',
		alt: 'Arquitectura de edificio gubernamental - Derecho Administrativo',
	},
	previsional: {
		url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=600&auto=format&fit=crop',
		alt: 'Escritorio con anteojos y documentos de seguridad social',
	},
	trayectoria: {
		// IMAGEN APAISADA SELECCIONADA (Oficina legal amplia)
		url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
		alt: 'Oficina de derecho moderna y profesional - Trayectoria de Adil Brkovic',
	},
};

const Home = () => {
	return (
		<div className=' flex flex-col'>
			{/* LÁMINA 1: HERO PRINCIPAL */}
			<HeroHome />

			{/* LÁMINA 2: GRILLA DE SERVICIOS (Cards) */}
			<section id='areas' className='px-8 sm:px-0 py-24 section-dark'>
				<div className=' mx-auto max-w-7xl'>
					<div className='mb-20 text-center'>
						<h2 className='text-4xl font-semibold uppercase tracking-widest'>Áreas de Trabajo</h2>
						<div className='w-24 h-1 bg-[#e67e22] mx-auto mt-6'></div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-6 gap-6'>
						{/* 1. REPARACIÓN Y DD.HH. (Ocupa 3 columnas) */}
						<div className='md:col-span-3'>
							<ServiceCard
								title={contenidos['reparacion-ddhh'].titulo}
								description={contenidos['reparacion-ddhh'].resumenHome}
								link='/servicio/reparacion-ddhh'
								image={contenidos['reparacion-ddhh'].imagen}
								imageAlt={contenidos['reparacion-ddhh'].titulo}
								attribution={contenidos['reparacion-ddhh'].creditoFoto}
							/>
						</div>

						{/* 2. DEFENSA DE COMUNIDADES (Ocupa 3 columnas) */}
						<div className='md:col-span-3'>
							<ServiceCard
								title={contenidos['defensa-comunidades'].titulo}
								description={contenidos['defensa-comunidades'].resumenHome}
								link='/servicio/defensa-comunidades'
								image={contenidos['defensa-comunidades'].imagen}
								imageAlt={contenidos['defensa-comunidades'].titulo}
								attribution={contenidos['defensa-comunidades'].creditoFoto}
							/>
						</div>

						{/* 3. LITIGIOS INDEMNIZATORIOS (Ocupa 2 columnas) */}
						<div className='md:col-span-2'>
							<ServiceCard
								title={contenidos['litigios-indemnizatorios'].titulo}
								description={contenidos['litigios-indemnizatorios'].resumenHome}
								link='/servicio/litigios-indemnizatorios'
								image={contenidos['litigios-indemnizatorios'].imagen}
								imageAlt={contenidos['litigios-indemnizatorios'].titulo}
								attribution={contenidos['litigios-indemnizatorios'].creditoFoto}
							/>
						</div>

						{/* 4. DEFENSA ADMINISTRATIVA (Ocupa 2 columnas) */}
						<div className='md:col-span-2'>
							<ServiceCard
								title={contenidos['defensa-administrativa'].titulo}
								description={contenidos['defensa-administrativa'].resumenHome}
								link='/servicio/defensa-administrativa'
								image={contenidos['defensa-administrativa'].imagen}
								imageAlt={contenidos['defensa-administrativa'].titulo}
								attribution={contenidos['defensa-administrativa'].creditoFoto}
							/>
						</div>

						{/* 5. JUSTICIA PREVISIONAL (Ocupa 2 columnas) */}
						<div className='md:col-span-2'>
							<ServiceCard
								title={contenidos['justicia-previsional'].titulo}
								description={contenidos['justicia-previsional'].resumenHome}
								link='/servicio/justicia-previsional'
								image={contenidos['justicia-previsional'].imagen}
								imageAlt={contenidos['justicia-previsional'].titulo}
								attribution={contenidos['justicia-previsional'].creditoFoto}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* LÁMINA 3: TEASER DE TRAYECTORIA */}

			<div className='px-0 md:px-8 container mx-auto max-w-7xl'>
				<ImageText
					title='Trayectoria Profesional'
					subtitle='Sobre Adil Brkovic'
					text='Con más de 30 años de experiencia, Adil Brkovic ha liderado hitos judiciales que transformaron la jurisprudencia en Chile. Su enfoque combina rigor técnico con un profundo compromiso social.'
					buttonText='Ver Trayectoria Completa'
					buttonLink='/trayectoria'
					imageSide='right'
					image='/img/trayectoria-adil.webp'
					imageAlt='abogado Adil Brkovic - trayectoria profesional'
					buttonVariant='dark'
				/>
			</div>

			{/* LÁMINA 4: CTA FINAL (Sin botón de volver) */}
			<CTASection />
		</div>
	);
};

export default Home;
