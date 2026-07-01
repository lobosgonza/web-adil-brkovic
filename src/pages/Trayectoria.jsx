import { useEffect, useState } from 'react';
import { HeroSecondary } from '../components/HeroSecondary';
import { Timeline } from '../components/Timeline';
import { PressSection } from '../components/PressSection';
import { ImageText } from '../components/ImageText';
import { noticias } from '../data/prensa';
import CTASection from '../components/CTASection';
import { Gavel, ChevronLeft, ChevronRight } from 'lucide-react';
import { ContentBox } from '../components/ContentBox'; // Asegúrate de haber creado este archivo
import DynamicSchema from '../components/DynamicSchema';

const Trayectoria = () => {
	const imagenTrayectoria = 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop';

	useEffect(() => {
		// document.title = 'Trayectoria | Adil Brkovic';
		window.scrollTo(0, 0);
	}, []);

	// Schema Profesional para potenciar la marca personal del Abogado Titular
	const trayectoriaSchema = {
		'@context': 'https://schema.org',
		'@type': 'Attorney',
		name: 'Adil Brkovic Almonte',
		url: 'https://estudiobrkovic.cl/trayectoria/',
		image: 'https://estudiobrkovic.cl/img/Hero-adil.webp',
		description: 'Abogado egresado de la Universidad Católica de Valparaíso, Magíster en Derecho Tributario y referente en la defensa de los Derechos Humanos en Chile.',
		alumniOf: [
			{ '@type': 'EducationalOrganization', name: 'Universidad Católica de Valparaíso' },
			{ '@type': 'EducationalOrganization', name: 'Universidad de Salamanca' },
			{ '@type': 'EducationalOrganization', name: 'Universidad Andrés Bello' },
		],
	};

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;

	const totalPages = Math.ceil(noticias.length / itemsPerPage);
	const currentNoticias = noticias.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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

	return (
		<div className=' min-h-screen font-sans'>
			{/* 🛠️ BLOQUE HELMET AGREGADO PARA GENERACIÓN SÍNCRONA DE METADATOS */}

			<title>Trayectoria Profesional | Adil Brkovic Almonte</title>
			<link rel='canonical' href='https://estudiobrkovic.cl/trayectoria/' />
			<meta
				name='description'
				content='Conoce los más de 30 años de trayectoria del abogado Adil Brkovic Almonte. Hitos judiciales, casos complejos y defensa de derechos fundamentales en Chile.'
			/>
			<meta property='og:title' content='Trayectoria Profesional | Adil Brkovic Almonte' />
			<meta property='og:url' content='https://estudiobrkovic.cl/trayectoria/' />

			{/* 🌟 INYECCIÓN SÍNCRONA EN EL BODY */}
			<DynamicSchema schemaData={trayectoriaSchema} />

			{/* HERO UNIFICADO */}
			<HeroSecondary title='TRAYECTORIA PROFESIONAL' subtitle='MÁS DE 30 AÑOS DE COMPROMISO CON LA JUSTICIA' image={imagenTrayectoria} />

			<section className='sm:px-12 md:py-8 max-w-7xl mx-auto'>
				{/* SECCIÓN 1: BIOGRAFÍA PRINCIPAL */}

				<ImageText
					title='Adil Brkovic Almonte'
					text={`Con más de 30 años de ejercicio profesional, Adil Brkovic Almonte, es un referente en la defensa de las víctimas de violaciones a los Derechos Humanos cometidas durante la dictadura militar, la defensa de derechos civiles en democracia y litigios de alta complejidad.

Egresado de la facultad de Derecho de la Universidad Católica de Valparaíso en 1987, es Licenciado en Ciencias Jurídicas de la Universidad de Salamanca de España, titulado de abogado por  la Corte Suprema de Chile y  Magíster en Derecho Tributario por la  Universidad Andrés Bello. Su carrera  profesional en el ámbito de los litigios  se  ha destacado  por liderar hitos jurídicos como las condenas a criminales de lesa humanidad, e indemnizaciones emblemáticas contra el Estado y grandes corporaciones, como los casos conocidos como Casas COPEVA y la Planta La Farfana de Aguas Andinas. En el ámbito académico  ha sido profesor de pregrado en los cursos  de derechos humanos y  derecho tributario.

Su estudio jurídico  cuenta con profesionales  especializados en litigios indemnizatorios, tributarios y administrativos,  combinando  el rigor técnico con el compromiso ético  cuya misión principal es entregar una representación legal cercana, estratégica y de calidad  a sus representados.`}
					buttonText='Contactar ahora'
					buttonLink='/contacto'
					image='/img/Hero-adil.webp'
					aspect='aspect-[3/4]'
					imageAlt='Adil Brkovic Almonte - Abogado Litigante'
					imageSide='left'
					buttonType='primary'
					buttonVariant='dark'
				/>

				{/* SECCIÓN 2: LINEA DE TIEMPO EVIDENCIA JURÍDICA */}
				<section className='md:my-16 max-w-7xl mx-auto' id='prensa-busqueda'>
					<div className='grid md:grid-cols-2  md:gap-16 items-start'>
						{/* COLUMNA: HITOS JUDICIALES */}
						<div className='flex flex-col'>
							<ContentBox title='Hitos Judiciales' subtitle='Casos que transformaron la jurisprudencia' icon={Gavel} borderColor='border-[#778696]'>
								<div className='pt-6'>
									<Timeline items={hitos} />
								</div>
							</ContentBox>
						</div>

						{/* COLUMNA: PRENSA */}
						<div className='flex flex-col'>
							<PressSection
								noticiasFiltradas={currentNoticias}
								renderPagination={
									totalPages > 1 && (
										<div className='flex justify-between p-2 '>
											<button
												onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
												disabled={currentPage === 1}
												className='flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest disabled:opacity-20 hover:text-[#e67e22] transition-colors'>
												<ChevronLeft size={14} /> Anterior
											</button>

											<span className='text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]'>
												{currentPage} / {totalPages}
											</span>

											<button
												onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
												disabled={currentPage === totalPages}
												className='flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest disabled:opacity-20 hover:text-[#e67e22] transition-colors'>
												Siguiente <ChevronRight size={14} />
											</button>
										</div>
									)
								}
							/>
						</div>
					</div>
				</section>
			</section>

			{/* CTA DE CIERRE */}
			<CTASection backTo='/' backText='Volver al Home' />
		</div>
	);
};

export default Trayectoria;
