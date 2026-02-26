export const HeroHome = () => (
	<section className='px-8 bg-white overflow-hidden'>
		<div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
			<div>
				<div className='w-12 h-1 bg-brand-gold mb-6'></div>
				<h1 className='text-6xl md:text-8xl font-black text-brand-blue leading-[0.9] tracking-tighter'>
					ADIL <br /> BRKOVIC
				</h1>
				<p className='text-brand-gold font-bold uppercase tracking-[0.3em] text-xs mt-4'>Abogado</p>
				<p className='mt-8 text-gray-600 text-lg border-l-4 border-brand-blue pl-6 max-w-md italic'>
					Defensa jurídica con más de 30 años de trayectoria. Especialista en litigios indemnizatorios individuales y colectivos.
				</p>
			</div>
			<div className='hidden md:block bg-brand-gray aspect-[4/5] shadow-2xl grayscale'>{/* Espacio para la foto de Adil */}</div>
		</div>
	</section>
);
