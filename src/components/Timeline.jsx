export const Timeline = ({ items }) => (
	<div className='relative space-y-12 border-l-2 border-[#e67e22]/30 ml-4 py-4'>
		{items.map((item, index) => (
			<div key={index} className='relative pl-10 group'>
				{/* 1. BOLITA GRANDE (El nodo principal del año) */}
				<div className='absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#e67e22] shadow-[0_0_10px_rgba(230,126,34,0.5)] z-20 transition-transform group-hover:scale-125'></div>

				{/* CONTENIDO DEL HITO */}
				<div className='flex flex-col'>
					<span className='text-[#e67e22] font-black italic text-xl leading-none'>{item.year}</span>
					<h4 className='text-[#2c3e50] font-bold text-lg mt-2'>{item.title}</h4>
					<p className='text-[#778696] text-sm mt-2 leading-relaxed max-w-md font-light'>{item.description}</p>
				</div>
			</div>
		))}
	</div>
);
