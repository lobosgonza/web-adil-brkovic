// src/components/PressItem.jsx
import { Newspaper, ExternalLink } from 'lucide-react';

export const PressItem = ({ noticia }) => {
	return (
		<a href={noticia.url} target='_blank' rel='noopener noreferrer' className='group block py-6 transition-all duration-300'>
			<div className='flex items-start justify-between gap-6'>
				<div className='space-y-2 flex-grow'>
					<div className='flex items-center gap-3'>
						<span className='text-[10px] font-bold text-[#e67e22] uppercase tracking-[0.2em]'>{noticia.medio}</span>
						<span className='text-[10px] text-[#778696] uppercase tracking-widest font-light'>— {noticia.fecha}</span>
					</div>
					<h4 className='text-lg font-display font-medium text-[#2c3e50] group-hover:text-[#e67e22] transition-colors leading-snug'>{noticia.titulo}</h4>
				</div>
				<div className='mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-[#e67e22]'>
					<ExternalLink size={18} />
				</div>
			</div>
		</a>
	);
};
