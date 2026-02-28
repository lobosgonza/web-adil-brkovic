export const Timeline = ({ items }) => (
	<div className='relative ml-4'>
		{items.map((item, index) => (
			<div key={index} className='relative pl-10 pb-12 last:pb-0 group'>
				{/* LÍNEA CONECTORA: Solo se dibuja si no es el último elemento */}
				{index !== items.length - 1 && <div className='absolute left-[7px] top-[16px] bottom-[-16px] w-[2px] bg-[#e67e22]/30 z-10'></div>}

				{/* BOLITA (El nodo principal) */}
				<div className='absolute left-0 top-[6px] w-4 h-4 rounded-full bg-[#e67e22] shadow-[0_0_10px_rgba(230,126,34,0.5)] z-20 transition-transform group-hover:scale-125'></div>

				{/* CONTENIDO DEL HITO */}
				<div className='flex flex-col'>
					<span className='text-[#e67e22] font-black italic text-xl leading-none'>{item.year}</span>
					<h4 className='text-[#2c3e50] font-bold text-lg mt-2 group-hover:text-[#e67e22] transition-colors'>{item.title}</h4>
					<p className='text-[#778696] text-sm mt-2 leading-relaxed max-w-md font-light'>{item.description}</p>
				</div>
			</div>
		))}
	</div>
);
