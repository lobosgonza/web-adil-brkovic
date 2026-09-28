'use client';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<button onClick={scrollToTop} className='group flex flex-col items-center gap-2 text-[#778696] hover:text-[#e67e22] transition-all duration-300'>
			<div className='p-2 rounded-full border border-gray-100 group-hover:border-[#e67e22] transition-colors'>
				<ArrowUp size={16} />
			</div>
			<span className='text-[9px] uppercase tracking-[0.3em] font-bold'>Ir al top</span>
		</button>
	);
};
