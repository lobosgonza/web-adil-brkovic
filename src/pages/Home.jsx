import { HeroHome } from '../components/HeroHome';
import { ServiceCard } from '../components/ServiceCard';
import { WhatsAppCTA } from '../components/WhatsAppCTA'; // SIN llaves
import { ImageText } from '../components/ImageText';
import CTASection from '../components/CTASection'; // SIN llaves
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
						<div className='md:col-span-3'>
							<ServiceCard
								title='Reparación y Derechos Humanos'
								description='Representación judicial estratégica para víctimas de violaciones a los DD.HH. y búsqueda de reparaciones históricas contra el Estado.'
								link='/servicio/reparacion-ddhh'
								image={serviciosData.ddhh.url}
								imageAlt={serviciosData.ddhh.alt}
							/>
						</div>
						<div className='md:col-span-3'>
							<ServiceCard
								title='Defensa de Comunidades'
								description='Litigación estratégica frente a daños socioambientales y defensa de grupos vulnerados por proyectos industriales o mineros.'
								link='/servicio/defensa-comunidades'
								image={serviciosData.comunidades.url}
								imageAlt={serviciosData.comunidades.alt}
							/>
						</div>

						<div className='md:col-span-2'>
							<ServiceCard
								title='Litigios Indemnizatorios'
								description='Especialistas en responsabilidad civil, negligencias médicas y accidentes con resultado de daño moral o material.'
								link='/servicio/litigios-indemnizatorios'
								image={serviciosData.indemnizaciones.url}
								imageAlt={serviciosData.indemnizaciones.alt}
							/>
						</div>
						<div className='md:col-span-2'>
							<ServiceCard
								title='Defensa Administrativa'
								description='Asesoría técnica en sumarios administrativos y defensa de funcionarios ante procesos sancionatorios del Estado.'
								link='/servicio/defensa-administrativa'
								image={serviciosData.administrativa.url}
								imageAlt={serviciosData.administrativa.alt}
							/>
						</div>
						<div className='md:col-span-2'>
							<ServiceCard
								title='Justicia Previsional'
								description='Gestión experta de PGU y pensiones para beneficiarios de Ley Valech y Exonerados Políticos ante el IPS.'
								link='/servicio/justicia-previsional'
								image={serviciosData.previsional.url}
								imageAlt={serviciosData.previsional.alt}
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
					image={serviciosData.trayectoria.url}
					imageAlt={serviciosData.trayectoria.alt}
					buttonVariant='dark'
				/>
			</div>

			{/* LÁMINA 4: CTA FINAL (Sin botón de volver) */}
			<CTASection />
		</div>
	);
};

export default Home;
