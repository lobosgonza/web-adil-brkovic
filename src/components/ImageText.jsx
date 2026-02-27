import { Link } from 'react-router-dom';

export const ImageText = ({
	title,
	subtitle,
	titleSecondary, // Nueva propiedad
	text,
	buttonText,
	buttonLink,
	imageSide,
	image,
	imageAlt,
	buttonVariant,
}) => {
	const subtitleColor = buttonVariant === 'dark' ? 'text-[#d35400]' : 'text-[#e67e22]';

	// Lógica para separar el texto en párrafos si contiene saltos de línea
	const paragraphs = typeof text === 'string' ? text.split('\n\n') : [text];

	return (
		<div className={`flex flex-col md:flex-row items-center gap-16 ${imageSide === 'right' ? 'md:flex-row-reverse' : ''}`}>
			{/* CONTENEDOR DE IMAGEN */}
			<div className='w-full md:w-1/2 overflow-hidden shadow-xl group'>
				<img src={image} alt={imageAlt} className='w-full object-cover aspect-video grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700' />
			</div>

			{/* CONTENEDOR DE TEXTO */}
			<div className='w-full md:w-1/2 space-y-8'>
				<div className='space-y-4'>
					<div className='space-y-2'>
						{/* El subtítulo pequeño de arriba */}
						<span className={`${subtitleColor} font-bold uppercase tracking-[0.3em] text-[10px]`}>{subtitle}</span>
						{/* Título Principal */}
						<h2 className='text-4xl font-semibold heading-light-bg uppercase tracking-tight leading-none'>{title}</h2>
					</div>

					{/* NUEVO: Título Secundario (Estilo bajada de título) */}
					{titleSecondary && <p className='text-[#e67e22] font-display text-xl md:text-2xl italic leading-snug'>{titleSecondary}</p>}
				</div>

				{/* RENDERIZADO DE PÁRRAFOS */}
				<div className='space-y-4'>
					{paragraphs.map((p, index) => (
						<p key={index} className='text-[#546e7a] font-light text-base md:text-lg leading-relaxed'>
							{p}
						</p>
					))}
				</div>

				<div className='pt-4'>
					<Link to={buttonLink} className={`btn-secondary btn-secondary-${buttonVariant}`}>
						{buttonText}
					</Link>
				</div>
			</div>
		</div>
	);
};
