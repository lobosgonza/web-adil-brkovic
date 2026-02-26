export const Timeline = ({ items }) => (
	<div className='space-y-12 border-l-2 border-brand-gold/30 ml-4'>
		{items.map((item, index) => (
			<div key={index} className='relative pl-10'>
				<div className='absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-gold shadow-[0_0_10px_rgba(197,160,89,0.5)]'></div>
				<span className='text-brand-gold font-black italic text-xl'>{item.year}</span>
				<h4 className='text-brand-blue font-bold text-lg mt-1'>{item.title}</h4>
				<p className='text-gray-500 text-sm mt-2 leading-relaxed'>{item.description}</p>
			</div>
		))}
	</div>
);
