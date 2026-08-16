import Link from 'next/link';

export const HeroHome = () => (
	<section className='px-8 bg-white overflow-hidden'>
		<div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
			<div className='py-20'>
				<div className='w-12 h-1 bg-[#e67e22] mb-6'></div>
				{/* 🟢 CAMBIO: Se reemplazó 'font-black' por 'font-semibold font-display' para igualar el CSS global */}
				<h1 className='text-5xl md:text-6xl font-semibold font-display text-brand-dark leading-[0.95] tracking-tighter'>ESTUDIO JURÍDICO BRKOVIC</h1>
				<p className='mt-8 text-gray-600 text-lg border-l-4 border-brand-dark pl-6 max-w-md italic'>
					Defensa jurídica con más de 30 años de trayectoria. Especialistas en litigios indemnizatorios individuales y colectivos.
				</p>
				<div className='mt-10'>
					<Link href='/trayectoria' className='btn-primary inline-block'>
						Conocer Trayectoria
					</Link>
				</div>
			</div>
			<div className='hidden md:block bg-[#778696]/10 aspect-[5/5] shadow-2xl overflow-hidden'>
				<img src='/img/Hero-adil.webp' alt='Adil Brkovic - Retrato Profesional' className='w-full h-full object-cover object-top' />
			</div>
		</div>
	</section>
);
