import { useEffect } from 'react';
import { HeroSecondary } from '../components/HeroSecondary';
import { Timeline } from '../components/Timeline';
import { ImageStack } from '../components/ImageStack';
import { PressItem } from '../components/PressItem';
import { noticias } from '../data/prensa'; // Importamos el archivo de noticias

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

			<section className='py-24 px-6 md:px-12 max-w-7xl mx-auto'>
				<div className='grid md:grid-cols-2 gap-20 items-start'>
					{/* LADO IZQUIERDO: BIOGRAFÍA Y PRENSA */}
					<div className='space-y-16'>
						<div className='space-y-8'>
							<h2 className='text-3xl font-display font-semibold text-[#2c3e50] uppercase tracking-tighter'>Adil Brkovic Almonte</h2>
							<div className='text-[#778696] font-light leading-relaxed space-y-6 text-lg'>
								<p>
									Licenciado en la Universidad Católica de Valparaíso, su carrera destaca por liderar hitos jurídicos como las condenas a criminales de lesa humanidad e
									indemnizaciones emblemáticas contra el Estado.
								</p>
								<p>
									Su práctica combina el rigor técnico con el compromiso profesional, consolidando una oficina que se destaca por entregar un servicio cercano y de alta
									complejidad.
								</p>
							</div>

							{/* Formación Académica Estilizada */}
							<div className='bg-white p-8 border-l-4 border-[#e67e22] shadow-sm'>
								<h3 className='font-display font-semibold text-[#2c3e50] mb-4 uppercase text-xs tracking-[0.2em]'>Formación Académica</h3>
								<ul className='text-sm space-y-3 text-[#778696] font-light'>
									<li className='flex items-center gap-2'>
										<span className='text-[#e67e22]'>•</span> Licenciado en Ciencias Jurídicas y Sociales
									</li>
									<li className='flex items-center gap-2'>
										<span className='text-[#e67e22]'>•</span> Abogado, Excelentísima Corte Suprema de Chile
									</li>
								</ul>
							</div>
						</div>

						{/* SECCIÓN DE PRENSA (NOTAS TAGGEADAS O HIGHLIGHTS) */}
						<div className='pt-10'>
							<h2 className='text-xs font-display font-semibold text-[#2c3e50] mb-8 uppercase tracking-[0.3em] border-b border-gray-200 pb-4'>Presencia en Medios</h2>
							<div className='divide-y divide-gray-100'>
								{noticias.map((noticia) => (
									<PressItem key={noticia.id} noticia={noticia} />
								))}
							</div>
						</div>

						<div className='pt-10'>
							<ImageStack />
						</div>
					</div>

					{/* LADO DERECHO: LÍNEA DE TIEMPO DE HITOS */}
					<div className='bg-white p-8 md:p-12 shadow-sm rounded-sm'>
						<h2 className='text-2xl font-display font-semibold text-[#2c3e50] mb-12 uppercase tracking-tighter border-b border-gray-100 pb-4'>Hitos Judiciales</h2>
						<Timeline items={hitos} />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Trayectoria;
