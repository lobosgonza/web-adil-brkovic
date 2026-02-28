import { PressItem } from './PressItem';
import { Newspaper } from 'lucide-react';
import { ContentBox } from './ContentBox';

export const PressSection = ({ title = 'Presencia en Medios', subtitle = 'Impacto y Opinión Pública', noticiasFiltradas }) => {
	if (!noticiasFiltradas || noticiasFiltradas.length === 0) return null;

	return (
		<ContentBox title={title} subtitle={subtitle} icon={Newspaper} borderColor='border-[#778696]'>
			{noticiasFiltradas.map((noticia) => (
				<PressItem key={noticia.id} noticia={noticia} />
			))}
		</ContentBox>
	);
};
