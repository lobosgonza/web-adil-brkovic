export const PressItem = ({ noticia }) => {
	return (
		<a href={noticia.link} target='_blank' rel='noopener noreferrer' className='group block border-b border-gray-100 py-8 hover:bg-[#F4F7F6]/50 transition-all px-4'>
			<div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
				<div className='space-y-2'>
					<div className='flex items-center gap-3'>
						<span className='text-[#e67e22] text-[10px] font-bold uppercase tracking-widest italic'>{noticia.medio}</span>
						<span className='text-[#778696] text-[10px] font-light uppercase'>{new Date(noticia.fecha).toLocaleDateString('es-CL', { year: 'numeric', month: 'long' })}</span>
					</div>
					<h3 className='font-display text-xl text-[#2c3e50] group-hover:text-[#e67e22] transition-colors leading-snug max-w-2xl font-semibold'>{noticia.titulo}</h3>
				</div>
				<div className='text-[#2c3e50]/20 group-hover:text-[#e67e22] transition-all transform group-hover:translate-x-2'>
					<svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
						<path d='M5 12h14' />
						<path d='m12 5 7 7-7 7' />
					</svg>
				</div>
			</div>
		</a>
	);
};
