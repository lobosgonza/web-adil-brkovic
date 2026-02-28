import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const BackButton = ({ to = '/areas-de-trabajo', text = 'Volver a Áreas de Trabajo' }) => {
	return (
		<div className='mt-10 flex justify-center'>
			<Link to={to} className='group flex items-center gap-2 text-[#778696] hover:text-[#e67e22] transition-colors text-xs uppercase tracking-[0.2em] font-medium'>
				<ArrowLeft size={14} className='group-hover:-translate-x-1 transition-transform' />
				{text}
			</Link>
		</div>
	);
};
