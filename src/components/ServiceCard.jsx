import { Link } from 'react-router-dom';

export const ServiceCard = ({ title, description, link, image, imageAlt, attribution }) => (
	<div className='card-service bg-white flex flex-col h-full shadow-lg group'>
		{/* 1. Imagen que toca los bordes */}
		<div className='aspect-video overflow-hidden w-full relative'>
			<img src={image} alt={imageAlt || title} className='w-full h-full object-cover  group-hover:scale-105 transition-all duration-700 block' />
			{/* CRÉDITO DE IMAGEN: Sutil y elegante en la esquina */}
			{attribution && (
				<span className='absolute bottom-1 right-2 text-[7px] text-white/50 uppercase tracking-tighter pointer-events-none group-hover:text-white/80 transition-opacity italic'>
					{attribution}
				</span>
			)}
		</div>

		{/* 2. Cuerpo de la card con colores forzados para contraste */}
		<div className='p-8 flex flex-col flex-grow bg-white'>
			{/* Forzamos el color azul oscuro del despacho mediante !text-brand-dark */}
			<h3 className='text-xl mb-4 uppercase tracking-tight !text-[#2c3e50] font-semibold'>{title}</h3>

			{/* Forzamos un gris legible para la descripción */}
			<p className='md:text-justify !text-slate-600 text-sm font-light leading-relaxed mb-8 flex-grow'>{description}</p>

			{/* BOTÓN PRIMARY: Ahora destaca con el naranja institucional */}
			<Link to={link} className='btn-primary w-full md:w-fit text-center'>
				Ver Área
			</Link>
		</div>
	</div>
);
