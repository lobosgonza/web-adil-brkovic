export const HeroSecondary = ({ title, subtitle }) => (
	<section className='pt-44 pb-20 bg-brand-blue text-white px-8'>
		<div className='max-w-7xl mx-auto'>
			<h1 className='text-5xl font-black uppercase tracking-tighter'>{title}</h1>
			<p className='text-brand-gold font-bold mt-2 tracking-widest uppercase text-sm'>{subtitle}</p>
		</div>
	</section>
);
