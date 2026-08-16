import { HeroHome } from '@/components/HeroHome';
import { ServiceCard } from '@/components/ServiceCard';
import { ImageText } from '@/components/ImageText';
import CTASection from '@/components/CTASection';
import { contenidos } from '@/data/areasDeTrabajo';

export const metadata = {
	title: 'Estudio Jurídico Brkovic | Abogado & Consultor Jurídico',
	description: 'Treinta años de trayectoria dedicados a la defensa técnica y ética en casos de alta complejidad, justicia y derechos humanos en Chile.',
};

export default function Home() {
	const homeSchema = {
		'@context': 'https://schema.org',
		'@type': 'LegalService',
		name: 'Estudio Jurídico Brkovic',
		url: 'https://estudiobrkovic.cl',
		logo: 'https://estudiobrkovic.cl/apple-touch-icon.png',
		image: 'https://estudiobrkovic.cl/og-image.jpg',
		description: 'Treinta años de trayectoria dedicados a la defensa técnica y ética en casos de alta complejidad, justicia y derechos humanos en Chile.',
		telephone: '+56953960666',
		email: 'estudiobrkovic@gmail.com',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Santiago',
			addressCountry: 'CL',
		},
		priceRange: '$$',
	};

	return (
		<>
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />

			<div className='flex flex-col'>
				<HeroHome />

				<section id='areas' className='px-8 sm:px-0 py-24 section-dark'>
					<div className='mx-auto max-w-7xl'>
						<div className='mb-20 text-center'>
							<h2 className='text-4xl font-semibold uppercase tracking-widest text-white'>Áreas de Trabajo</h2>
							<div className='w-24 h-1 bg-[#e67e22] mx-auto mt-6'></div>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-6 gap-6'>
							<div className='md:col-span-2'>
								<ServiceCard
									title={contenidos['litigios-indemnizatorios'].titulo}
									description={contenidos['litigios-indemnizatorios'].resumenHome}
									link='/areas-de-trabajo/litigios-indemnizatorios'
									image={contenidos['litigios-indemnizatorios'].imagen}
									attribution={contenidos['litigios-indemnizatorios'].creditoFoto}
								/>
							</div>
							<div className='md:col-span-2'>
								<ServiceCard
									title={contenidos['reparacion-ddhh'].titulo}
									description={contenidos['reparacion-ddhh'].resumenHome}
									link='/areas-de-trabajo/reparacion-ddhh'
									image={contenidos['reparacion-ddhh'].imagen}
									attribution={contenidos['reparacion-ddhh'].creditoFoto}
								/>
							</div>
							<div className='md:col-span-2'>
								<ServiceCard
									title={contenidos['defensa-comunidades'].titulo}
									description={contenidos['defensa-comunidades'].resumenHome}
									link='/areas-de-trabajo/defensa-comunidades'
									image={contenidos['defensa-comunidades'].imagen}
									attribution={contenidos['defensa-comunidades'].creditoFoto}
								/>
							</div>
							<div className='md:col-span-2'>
								<ServiceCard
									title={contenidos['defensa-administrativa'].titulo}
									description={contenidos['defensa-administrativa'].resumenHome}
									link='/areas-de-trabajo/defensa-administrativa'
									image={contenidos['defensa-administrativa'].imagen}
									attribution={contenidos['defensa-administrativa'].creditoFoto}
								/>
							</div>
							<div className='md:col-span-2'>
								<ServiceCard
									title={contenidos['justicia-previsional'].titulo}
									description={contenidos['justicia-previsional'].resumenHome}
									link='/areas-de-trabajo/justicia-previsional'
									image={contenidos['justicia-previsional'].imagen}
									attribution={contenidos['justicia-previsional'].creditoFoto}
								/>
							</div>
							<div className='md:col-span-2'>
								<ServiceCard
									title={contenidos['practica-tributaria'].titulo}
									description={contenidos['practica-tributaria'].resumenHome}
									link='/areas-de-trabajo/practica-tributaria'
									image={contenidos['practica-tributaria'].imagen}
									attribution={contenidos['practica-tributaria'].creditoFoto}
								/>
							</div>
						</div>
					</div>
				</section>

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

				<CTASection />
			</div>
		</>
	);
}
