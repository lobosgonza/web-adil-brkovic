import { Link } from 'react-router-dom';

export const ServiceCard = ({ title, description, link }) => {
	return (
		<div className='group border border-gray-100 p-8 hover:border-brand-gold transition-all bg-white shadow-sm hover:shadow-xl flex flex-col h-full'>
			<h3 className='text-brand-blue font-bold text-xl mb-4 group-hover:text-brand-gold transition-colors'>{title}</h3>
			<p className='text-gray-600 text-sm mb-6 leading-relaxed flex-grow'>{description}</p>
			<Link to={link} className='text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue border-b-2 border-brand-gold pb-1 w-fit hover:text-brand-gold transition-all'>
				Ver detalles
			</Link>
		</div>
	);
};
