'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { PressSection } from '@/components/PressSection';
import { ImageText } from '@/components/ImageText';
import { HeroSecondary } from '@/components/HeroSecondary';
import CTASection from '@/components/CTASection';

import { noticias } from '@/data/prensa';
import { WHATSAPP_URL } from '@/constants/contact';

export default function ServiceClient({ id, data }) {
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(3);

	// Detectar pantalla móvil en el cliente para ajustar paginación
	useEffect(() => {
		const handleResize = () => {
			setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const totalPages = Math.ceil(noticias.length / itemsPerPage);
	const currentNoticias = noticias.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

	// Resetear paginación si cambia la especialidad
	useEffect(() => {
		setCurrentPage(1);
	}, [id]);

	// Scroll suave al cambiar de página en la sección de prensa
	const prensaRef = useRef(null);
	useEffect(() => {
		if (currentPage > 1 && prensaRef.current) {
			prensaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}, [currentPage]);

	return (
		<div>
			<HeroSecondary title={data.titulo} subtitle='Área de Especialidad' image={data.imagen} />

			<div className='max-w-7xl mx-auto'>
				<ImageText
					title={data.titulo}
					titleSecondary={data.titleSecondary}
					text={data.descripcion}
					buttonText='Solicitar Consulta'
					buttonLink={WHATSAPP_URL}
					imageSide='left'
					image={data.imagen}
					attribution={data.creditoFoto}
					imageAlt={`Imagen representativa de ${data.titulo}`}
					buttonType='primary'
					buttonVariant='dark'
				/>

				<div className='py-12 px-4' ref={prensaRef}>
					<PressSection
						title='Presencia en Medios'
						subtitle='Impacto y Opinión Pública'
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
			</div>

			<CTASection backTo='/areas-de-trabajo' backText='Volver a Áreas de Trabajo' />
		</div>
	);
}
