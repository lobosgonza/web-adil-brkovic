import React from 'react';
import { PressItem } from '@/components/PressItem';
import { Newspaper } from 'lucide-react';
import { ContentBox } from '@/components/ContentBox';

export const PressSection = ({ title = 'Presencia en Medios', subtitle = 'Impacto y Opinión Pública', noticiasFiltradas, renderPagination }) => {
	if (!noticiasFiltradas || noticiasFiltradas.length === 0) return null;

	return (
		<ContentBox title={title} subtitle={subtitle} icon={Newspaper} borderColor='border-[#778696]'>
			{renderPagination && <div className='mb-6'>{renderPagination}</div>}

			<div className='flex flex-col gap-4'>
				{noticiasFiltradas.map((noticia) => (
					<PressItem key={noticia.id} noticia={noticia} />
				))}
			</div>
		</ContentBox>
	);
};
