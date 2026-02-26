export const ImageText = ({ title, subtitle, text, buttonText, buttonLink, imageSide = 'left' }) => (
	<div className={`flex flex-col md:flex-row items-center gap-16 ${imageSide === 'right' ? 'md:flex-row-reverse' : ''}`}>
		<div className='w-full md:w-1/2 bg-gray-200 aspect-video shadow-lg'></div>
		<div className='w-full md:w-1/2'>
			<span className='text-brand-gold font-bold uppercase tracking-widest text-xs'>{subtitle}</span>
			<h2 className='text-4xl font-black text-brand-blue mt-2 mb-6 tracking-tighter uppercase'>{title}</h2>
			<p className='text-gray-600 leading-relaxed mb-8'>{text}</p>
			<a href={buttonLink} className='bg-brand-blue text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition-all'>
				{buttonText}
			</a>
		</div>
	</div>
);
