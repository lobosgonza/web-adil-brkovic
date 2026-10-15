'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PressSection } from '@/components/PressSection';

export default function AreaPress({ noticiasArea = [] }) {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 3;
	const totalPages = Math.ceil(noticiasArea.length / itemsPerPage);
	const currentNoticias = noticiasArea.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
	const prensaRef = useRef(null);

	useEffect(() => {
		setCurrentPage(1);
	}, [noticiasArea]);

	useEffect(() => {
		if (currentPage > 1 && prensaRef.current) {
			prensaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}, [currentPage]);

	if (noticiasArea.length === 0) return null;

	return (
		<div className='py-12 px-4' ref={prensaRef}>
			<PressSection
				title='Casos Reales y Presencia en Medios'
				subtitle='Respaldo periodístico y fallos destacados'
				noticiasFiltradas={currentNoticias}
				renderPagination={
					totalPages > 1 && (
						<div className='flex justify-between items-center py-2'>
							<button
								onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
								disabled={currentPage === 1}
								className='flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-20 hover:enabled:text-[#e67e22]'>
								<ChevronLeft size={14} /> Anterior
							</button>
							<span className='text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]'>
								{currentPage} / {totalPages}
							</span>
							<button
								onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
								disabled={currentPage === totalPages}
								className='flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest transition-colors cursor-pointer disabled:cursor-not-allowed disabled:opacity-20 hover:enabled:text-[#e67e22]'>
								Siguiente <ChevronRight size={14} />
							</button>
						</div>
					)
				}
			/>
		</div>
	);
}
