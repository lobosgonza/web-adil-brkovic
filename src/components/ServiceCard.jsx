import Link from 'next/link';

export const ServiceCard = ({ title, description, link, image, attribution }) => (
	<div className='card-service bg-white flex flex-col h-full shadow-lg group'>
		{/* CONTENEDOR DE IMAGEN */}
		<div className='aspect-video overflow-hidden w-full relative shrink-0'>
			<img src={image} alt={title} className='w-full h-full object-cover group-hover:scale-105 transition-all duration-700 block' />
			{attribution && (
				<span className='absolute bottom-1 right-2 text-[7px] text-white/50 uppercase tracking-tighter pointer-events-none group-hover:text-white/80 transition-opacity italic'>
					{attribution}
				</span>
			)}
		</div>

		{/* CONTENEDOR DE TEXTO (BG-WHITE) */}
		<div className='p-8 flex flex-col flex-grow bg-white'>
			{/* TÍTULO EN COLOR OSCURO (#2c3e50) */}
			<h3 className='text-xl mb-4 uppercase tracking-tight !text-[#2c3e50] font-semibold'>{title}</h3>

			{/* DESCRIPCIÓN EN COLOR GRIS SLATE (#475569) */}
			<p className='md:text-justify !text-slate-600 text-sm font-light leading-relaxed mb-8 flex-grow'>{description}</p>

			{/* BOTÓN PRIMARIO IGUAL AL ORIGINAL */}
			<div>
				<Link href={link} className='btn-primary w-full md:w-fit text-center inline-block'>
					Ver Área
				</Link>
			</div>
		</div>
	</div>
);
