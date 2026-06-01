import { Link } from 'react-router-dom';

export const HeroHome = () => (
	<section className='px-8 bg-white overflow-hidden'>
		<div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
			<div className='py-20'>
				<div className='w-12 h-1 bg-brand-gold mb-6'></div>
				<h1 className='text-6xl md:text-6xl font-black text-brand-blue leading-[0.9] tracking-tighter'>ESTUDIO JURÍDICO BRKOVIC</h1>
				{/* <p className='text-brand-gold font-bold uppercase tracking-[0.3em] text-xs mt-4'>Abogado</p> */}
				<p className='mt-8 text-gray-600 text-lg border-l-4 border-brand-blue pl-6 max-w-md italic'>
					Defensa jurídica con más de 30 años de trayectoria. Especialistas en litigios indemnizatorios individuales y colectivos.
				</p>
				{/* BOTÓN PRIMARIO AÑADIDO */}
				<div className='mt-10'>
					<Link to='/trayectoria' className='btn-primary inline-block'>
						Conocer Trayectoria
					</Link>
				</div>
			</div>
			<div className='hidden md:block bg-brand-gray aspect-[5/5] shadow-2xl overflow-hidden'>
				{' '}
				{/* Added overflow-hidden */}
				{/* NUEVA IMAGEN DE RETRATO A COLOR AJUSTADA */}
				<img
					src='/img/Hero-adil.webp'
					// src='/img/trayectoria-adil.PNG'
					alt='Adil Brkovic - Retrato Profesional'
					className='w-full h-full object-cover object-top' // Standard portrait fit, prioritizing the top/face
				/>
			</div>
		</div>
	</section>
);
