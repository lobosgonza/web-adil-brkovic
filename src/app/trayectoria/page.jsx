import { HeroSecondary } from '@/components/HeroSecondary';
import { Timeline } from '@/components/Timeline';
import { ImageText } from '@/components/ImageText';
import { ContactForm } from '@/components/ContactForm';
import { BackButton } from '@/components/BackButton';
import { Gavel } from 'lucide-react';
import { ContentBox } from '@/components/ContentBox';
import { WHATSAPP_URL } from '@/constants/contact';
import { TrayectoriaPress } from '@/components/TrayectoriaPress';

export const metadata = {
	title: 'Trayectoria Profesional | Adil Brkovic Almonte',
	description: 'Conoce los más de 30 años de trayectoria del abogado Adil Brkovic Almonte. Hitos judiciales, casos complejos y defensa de derechos fundamentales en Chile.',
	alternates: {
		canonical: 'https://estudiobrkovic.cl/trayectoria',
	},
	openGraph: {
		title: 'Trayectoria Profesional | Adil Brkovic Almonte',
		description: 'Conoce los más de 30 años de trayectoria del abogado Adil Brkovic Almonte. Hitos judiciales, casos complejos y defensa de derechos fundamentales en Chile.',
		url: 'https://estudiobrkovic.cl/trayectoria',
		type: 'profile',
		images: [{ url: '/img/Hero-adil.webp', width: 800, height: 1000, alt: 'Adil Brkovic' }],
	},
};

const trayectoriaSchema = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Adil Brkovic Almonte',
	jobTitle: 'Abogado Litigante',
	worksFor: {
		'@type': 'LegalService',
		name: 'Estudio Jurídico Brkovic',
		url: 'https://estudiobrkovic.cl',
	},
	url: 'https://estudiobrkovic.cl/trayectoria',
	image: 'https://estudiobrkovic.cl/img/Hero-adil.webp',
	description: 'Abogado egresado de la Universidad Católica de Valparaíso, Magíster en Derecho Tributario y referente en la defensa de los Derechos Humanos en Chile.',
	alumniOf: [
		{ '@type': 'EducationalOrganization', name: 'Universidad Católica de Valparaíso' },
		{ '@type': 'EducationalOrganization', name: 'Universidad de Salamanca' },
		{ '@type': 'EducationalOrganization', name: 'Universidad Andrés Bello' },
	],
};

const hitos = [
	{
		year: '2001',
		title: "Caso 'Libro Negro'",
		description: 'Defensa de la periodista Alejandra Matus tras la incautación de su obra, logrando una indemnización histórica y la derogación de leyes de censura.',
	},
	{
		year: '2009',
		title: 'Casas Copeva',
		description: 'Indemnización para familias de Pudahuel por fallas graves en viviendas sociales, estableciendo la responsabilidad del Serviu.',
	},
	{
		year: '2011',
		title: 'Fallo Aguas Andinas',
		description: 'Condena a la sanitaria a pagar más de $1.000 millones a vecinos de La Farfana por daño moral debido a malos olores.',
	},
	{
		year: '2012',
		title: 'Caso Patio 29',
		description: 'Primera condena indemnizatoria contra el Fisco por errores del SML en la identificación de detenidos desaparecidos.',
	},
	{
		year: '2019',
		title: 'Anulación Consejos de Guerra',
		description: 'La Corte Suprema invalida los consejos de guerra de Pisagua (1973), declarando la inocencia de los ejecutados tras 46 años.',
	},
];

export default function TrayectoriaPage() {
	const imagenTrayectoria = 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop';

	return (
		<div className='min-h-screen font-sans'>
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(trayectoriaSchema) }} />
			<HeroSecondary title='TRAYECTORIA PROFESIONAL' subtitle='MÁS DE 30 AÑOS DE COMPROMISO CON LA JUSTICIA' image={imagenTrayectoria} />

			<section className='sm:px-12 md:py-8 max-w-7xl mx-auto'>
				<ImageText
					title='Adil Brkovic Almonte'
					text={`Con más de 30 años de ejercicio profesional, Adil Brkovic Almonte es un referente en la defensa de las víctimas de violaciones a los Derechos Humanos cometidas durante la dictadura militar, la defensa de derechos civiles en democracia y litigios de alta complejidad. Egresado de la Facultad de Derecho de la Universidad Católica de Valparaíso en 1987, es Licenciado en Ciencias Jurídicas de la Universidad de Salamanca de España, titulado de abogado por la Corte Suprema de Chile y Magíster en Derecho Tributario por la Universidad Andrés Bello. Su carrera profesional en el ámbito de los litigios se ha destacado por liderar hitos jurídicos tales como las condenas a criminales de lesa humanidad, e indemnizaciones emblemáticas contra el Estado y grandes corporaciones, destacando los casos denominados Casas COPEVA y la Planta La Farfana de Aguas Andinas. En el ámbito académico ha sido profesor de pregrado en los cursos de derechos humanos y derecho tributario. Su estudio jurídico cuenta con profesionales especializados en litigios indemnizatorios, tributarios y administrativos, combinando el rigor técnico con el compromiso ético cuya misión principal es entregar una representación legal cercana, estratégica y de calidad a sus representados.`}
					buttonText='Solicitar Evaluación'
					buttonLink='#formulario-evaluacion'
					image='/img/Hero-adil.webp'
					aspect='aspect-[3/4]'
					imageAlt='Adil Brkovic Almonte - Abogado Litigante'
					imageSide='left'
					buttonType='primary'
					buttonVariant='dark'
				/>

				<section className='md:my-16 max-w-7xl mx-auto' id='prensa-busqueda'>
					<div className='grid md:grid-cols-2 md:gap-16 items-start'>
						<div className='flex flex-col'>
							<ContentBox title='Hitos Judiciales' subtitle='Casos que transformaron la jurisprudencia' icon={Gavel} borderColor='border-[#778696]'>
								<div className='pt-6'>
									<Timeline items={hitos} />
								</div>
							</ContentBox>
						</div>
						<div className='flex flex-col'>
							<TrayectoriaPress />
						</div>
					</div>
				</section>
			</section>

			<section id='formulario-evaluacion' className='px-4 md:px-8 max-w-7xl mx-auto pb-16'>
				<ContactForm title='Evaluación de Caso con Adil Brkovic' />
				<BackButton to='/' text='Volver al Home' />
			</section>
		</div>
	);
}
