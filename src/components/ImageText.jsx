import { Link } from 'react-router-dom';

export const ImageText = ({
	title,
	subtitle,
	titleSecondary,
	text,
	buttonText,
	buttonLink,
	imageSide,
	image,
	imageAlt,
	attribution,
	buttonVariant = 'dark', // 'dark' o 'light'
	buttonType = 'secondary', // 'primary' o 'secondary' (por defecto)

	aspect = 'aspect-video', // <--- Nuevo prop: por defecto es horizontal
}) => {
	const subtitleColor = buttonVariant === 'dark' ? 'text-[#d35400]' : 'text-[#e67e22]';

	// Lógica para detectar si el link es a WhatsApp o externo
	const isExternal = buttonLink?.startsWith('http');

	// Lógica de clases para el botón
	const getButtonClass = () => {
		if (buttonType === 'primary') {
			return 'btn-primary'; // Tu clase global para botones sólidos
		}
		// Si es secundario, usa la lógica que ya tenías
		return `btn-secondary btn-secondary-${buttonVariant}`;
	};

	// Función mágica para formatear negritas y saltos simples dentro de cada párrafo
	const formatText = (content) => {
		return content.split('**').map((part, i) => {
			// Si el índice es impar, significa que estaba rodeado de **
			if (i % 2 === 1) {
				return (
					<strong key={i} className='font-bold text-[#2c3e50]'>
						{part}
					</strong>
				);
			}
			// Para las partes normales, respetamos saltos de línea simples si los hay
			return part;
		});
	};
	// Dividimos por doble salto de línea para crear párrafos independientes
	const paragraphs = typeof text === 'string' ? text.split('\n\n') : [text];
	return (
		<div className={`sm:my-16 shadow-none rounded-sm p-8 bg-white flex flex-col md:flex-row items-center gap-10 md:gap-16 ${imageSide === 'right' ? 'md:flex-row-reverse' : ''}`}>
			{/* CONTENEDOR DE IMAGEN */}
			<div className='w-full md:w-1/2 overflow-hidden shadow-xl group relative'>
				{' '}
				{/* <--- Agregado 'relative' aquí */}
				<img src={image} alt={imageAlt} className='w-full object-cover ${aspect} transition-all duration-700' />
				{/* CRÉDITO DE IMAGEN */}
				{attribution && (
					<span className='absolute bottom-1 right-2 text-[7px] text-white/40 uppercase tracking-tighter pointer-events-none group-hover:text-white/70 transition-opacity italic z-10'>
						{attribution}
					</span>
				)}
			</div>

			{/* CONTENEDOR DE TEXTO */}
			<div className='w-full md:w-1/2 space-y-8'>
				<div className='space-y-4'>
					<div className='space-y-2'>
						{subtitle && <span className={`${subtitleColor} font-bold uppercase tracking-[0.3em] text-[10px]`}>{subtitle}</span>}
						<h2 className='text-4xl font-semibold heading-light-bg uppercase tracking-tight leading-none text-[#2c3e50]'>{title}</h2>
					</div>

					{titleSecondary && <p className='text-[#e67e22] font-display text-xl md:text-2xl italic leading-snug'>{titleSecondary}</p>}
				</div>

				<div className='space-y-4'>
					{paragraphs.map((p, index) => (
						<p key={index} className='text-justify text-[#546e7a] font-light text-base md:text-lg leading-relaxed whitespace-pre-line'>
							{formatText(p)}
						</p>
					))}
				</div>

				{/* Reemplaza el bloque del botón por este: */}
				<div className='pt-4'>
					{isExternal ? (
						<a href={buttonLink} target='_blank' rel='noopener noreferrer' className={getButtonClass()}>
							{buttonText}
						</a>
					) : (
						<Link to={buttonLink} className={getButtonClass()}>
							{buttonText}
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};
