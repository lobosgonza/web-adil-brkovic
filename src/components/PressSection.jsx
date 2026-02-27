// src/components/PressSection.jsx
import { PressItem } from './PressItem';
import { Newspaper } from 'lucide-react';

export const PressSection = ({ title = 'Presencia en Medios', subtitle = 'Impacto y Opinión Pública', noticiasFiltradas }) => {
	if (!noticiasFiltradas || noticiasFiltradas.length === 0) return null;

	return (
		<div className='bg-white p-10 md:p-14 shadow-sm border-t-4 border-[#778696]'>
			<div className='mb-10'>
				<div className='flex items-center gap-3 mb-2'>
					<Newspaper size={16} className='text-[#e67e22]' />
					<h2 className='text-2xl font-display font-semibold text-[#2c3e50] uppercase tracking-tighter'>{title}</h2>
				</div>
				<p className='text-[#778696] text-xs uppercase tracking-widest font-light'>{subtitle}</p>
			</div>

			<div className='divide-y divide-gray-100'>
				{noticiasFiltradas.map((noticia) => (
					<PressItem key={noticia.id} noticia={noticia} />
				))}
			</div>
		</div>
	);
};
