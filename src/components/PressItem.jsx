import { ExternalLink, CheckCircle2 } from 'lucide-react';

export const PressItem = ({ noticia }) => {
	return (
		<a href={noticia.link} target='_blank' rel='noopener noreferrer' className='group block py-6 transition-all duration-300 border-b border-gray-100 last:border-0'>
			{/* Cambiamos a flex-col en mobile y flex-row en desktop */}
			<div className='flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6'>
				<div className='space-y-3 flex-grow'>
					{/* Tags de medio y fecha */}
					<div className='flex items-center gap-3'>
						<span className='text-[10px] font-bold text-[#e67e22] uppercase tracking-[0.2em]'>{noticia.medio}</span>
						<span className='text-[10px] text-[#778696] uppercase tracking-widest font-light'>— {noticia.fecha}</span>
					</div>

					{/* Título: Ajustamos el tamaño para que sea más legible en mobile */}
					<h4 className='text-base md:text-lg font-display font-medium text-[#2c3e50] group-hover:text-[#e67e22] transition-colors leading-snug'>{noticia.titulo}</h4>

					{/* Logro: En mobile le damos más aire y quitamos el italic si se siente muy cargado */}
					{noticia.logro && (
						<div className='flex items-start gap-2 text-sm text-gray-500 font-light bg-gray-50/80 p-3 rounded-sm border-l-2 border-[#e67e22]/30'>
							<CheckCircle2 size={14} className='text-[#e67e22] mt-0.5 flex-shrink-0' />
							<p className='leading-relaxed'>{noticia.logro}</p>
						</div>
					)}
				</div>

				{/* Botón: En mobile lo movemos a la derecha/abajo de forma más integrada */}
				<div className='flex justify-end md:block'>
					<div className='flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#778696] font-bold md:hidden mb-2'>
						Ver nota completa <ExternalLink size={12} />
					</div>

					<div className='hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 items-center justify-center text-[#778696] group-hover:bg-[#e67e22] group-hover:text-white transition-all duration-300'>
						<ExternalLink size={16} />
					</div>
				</div>
			</div>
		</a>
	);
};
