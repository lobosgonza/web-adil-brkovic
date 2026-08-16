export const HeroSecondary = ({ title, subtitle, image }) => {
	return (
		<section className='bg-[#2c3e50] pt-40 pb-24 px-6 relative overflow-hidden'>
			{image && (
				<div className='absolute inset-0 z-0'>
					<img src={image} alt={title} className='w-full h-full object-cover opacity-40' />
					<div className='absolute inset-0 bg-gradient-to-t from-[#2c3e50] via-[#2c3e50]/60 to-transparent'></div>
				</div>
			)}

			<div className='absolute inset-0 bg-gradient-to-br from-black/20 to-transparent pointer-events-none'></div>

			<div className='max-w-7xl mx-auto relative z-10'>
				<div className='flex flex-col items-start'>
					<span className='text-[#e67e22] font-bold uppercase tracking-[0.4em] text-[10px] mb-4'>{subtitle}</span>
					<h1 className='!text-white font-display text-4xl md:text-6xl font-semibold uppercase tracking-tighter leading-[0.9] max-w-4xl'>{title}</h1>
					<div className='w-16 h-1 bg-[#e67e22] mt-10'></div>
				</div>
			</div>
		</section>
	);
};
