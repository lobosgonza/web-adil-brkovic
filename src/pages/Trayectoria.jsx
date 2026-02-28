import { useEffect } from 'react';
import { HeroSecondary } from '../components/HeroSecondary';
import { Timeline } from '../components/Timeline';
import { PressSection } from '../components/PressSection';
import { ImageText } from '../components/ImageText';
import { noticias } from '../data/prensa';
import CTASection from '../components/CTASection';
import { Gavel } from 'lucide-react';
import { ContentBox } from '../components/ContentBox'; // Asegúrate de haber creado este archivo

const Trayectoria = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

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
		<div className='bg-[#F4F7F6] min-h-screen font-sans'>
			{/* HERO UNIFICADO */}
			<HeroSecondary title='TRAYECTORIA PROFESIONAL' subtitle='MÁS DE 30 AÑOS DE COMPROMISO CON LA JUSTICIA' />

			{/* SECCIÓN 1: BIOGRAFÍA PRINCIPAL */}
			<section className='py-20 px-6  border-b border-gray-100'>
				<div className='max-w-7xl mx-auto'>
					<ImageText
						title='Adil Brkovic Almonte'
						text={`Con más de 30 años de ejercicio profesional, Adil Brkovic Almonte, es un referente en la defensa de las víctimas de violaciones a los Derechos Humanos cometidas durante la dictadura militar, la defensa de derechos civiles en democracia y litigios indemnizatorios de alta complejidad.

Licenciado en la Universidad Católica de Valparaíso, su carrera destaca por liderar hitos jurídicos como las condenas a criminales de lesa humanidad, indemnizaciones emblemáticas contra el Estado y grandes Corporaciones, como los casos conocidos como Casas COPEVA y la Planta la Farfana de Aguas Andinas.

Especialista en litigios indemnizatorios, su práctica combina el rigor técnico con el compromiso profesional, consolidando una oficina que se destaca por entregar un servicio cercano y de calidad a sus representados.`}
						buttonText='Contactar ahora'
						buttonLink='/contacto'
						image='https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop'
						imageAlt='Adil Brkovic Almonte - Abogado Litigante'
						imageSide='left'
						buttonType='primary' // <--- AQUÍ ELIGES EL ESTILO
						buttonVariant='dark'
					/>
				</div>
			</section>

			{/* SECCIÓN 2: EVIDENCIA JURÍDICA (ESTANDARIZADA) */}
			<section className='py-24 px-6 md:px-12 max-w-7xl mx-auto'>
				<div className='grid md:grid-cols-2 gap-12 lg:gap-16 items-stretch'>
					{/* COLUMNA DERECHA: HITOS (Usando el nuevo ContentBox) */}
					<div className='flex flex-col h-full'>
						<ContentBox title='Hitos Judiciales' subtitle='Casos que transformaron la jurisprudencia' icon={Gavel} borderColor='border-[#2c3e50]'>
							<div className='pt-6'>
								<Timeline items={hitos} />
							</div>
						</ContentBox>
					</div>
					{/* COLUMNA IZQUIERDA: PRENSA (Ya usa ContentBox internamente) */}
					<div className='flex flex-col h-full'>
						<PressSection noticiasFiltradas={noticias} />
					</div>
				</div>
			</section>

			{/* CTA DE CIERRE */}
			{/* <CTASection variant='full' /> */}
		</div>
	);
};

export default Trayectoria;
