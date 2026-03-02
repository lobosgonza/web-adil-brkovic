import React from 'react';
import { PressItem } from './PressItem';
import { Newspaper } from 'lucide-react';
import { ContentBox } from './ContentBox';

export const PressSection = ({
	title = 'Presencia en Medios',
	subtitle = 'Impacto y Opinión Pública',
	noticiasFiltradas,
	renderPagination, // <-- Nueva prop
}) => {
	if (!noticiasFiltradas || noticiasFiltradas.length === 0) return null;

	return (
		<ContentBox title={title} subtitle={subtitle} icon={Newspaper} borderColor='border-[#778696]'>
			{/* Renderizamos los botones aquí, dentro de la caja */}
			{renderPagination && <div className='mb-6'>{renderPagination}</div>}

			<div className='flex flex-col gap-4'>
				{noticiasFiltradas.map((noticia) => (
					<PressItem key={noticia.id} noticia={noticia} />
				))}
			</div>
		</ContentBox>
	);
};
