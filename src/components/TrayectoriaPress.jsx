'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PressSection } from '@/components/PressSection';
import { noticias } from '@/data/prensa';

export const TrayectoriaPress = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 3;
	const totalPages = Math.ceil(noticias.length / itemsPerPage);
	const currentNoticias = noticias.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

	return (
		<PressSection
			noticiasFiltradas={currentNoticias}
			renderPagination={
				totalPages > 1 && (
					<div className='flex justify-between p-2'>
						<button
							onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
							disabled={currentPage === 1}
							className='flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest disabled:opacity-20 hover:text-[#e67e22] transition-colors'>
							<ChevronLeft size={14} /> Anterior
						</button>
						<span className='text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]'>
							{currentPage} / {totalPages}
						</span>
						<button
							onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
							disabled={currentPage === totalPages}
							className='flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest disabled:opacity-20 hover:text-[#e67e22] transition-colors'>
							Siguiente <ChevronRight size={14} />
						</button>
					</div>
				)
			}
		/>
	);
};
