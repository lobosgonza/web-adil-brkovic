import { Link } from 'react-router-dom';

export const ServiceCard = ({ title, description, link, image, imageAlt }) => (
	<div className='card-service bg-white flex flex-col h-full shadow-lg group'>
		{/* 1. Imagen que toca los bordes */}
		<div className='aspect-video overflow-hidden w-full'>
			<img src={image} alt={imageAlt || title} className='w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 block' />
		</div>

		{/* 2. Cuerpo de la card con colores forzados para contraste */}
		<div className='p-8 flex flex-col flex-grow bg-white'>
			{/* Forzamos el color azul oscuro del despacho mediante !text-brand-dark */}
			<h3 className='text-xl mb-4 uppercase tracking-tight !text-[#2c3e50] font-semibold'>{title}</h3>

			{/* Forzamos un gris legible para la descripción */}
			<p className='!text-slate-600 text-sm font-light leading-relaxed mb-8 flex-grow'>{description}</p>

			{/* Botón estandarizado */}
			<Link to={link} className='btn-primary w-full md:w-fit'>
				Ver Área
			</Link>
		</div>
	</div>
);
