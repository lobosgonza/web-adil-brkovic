'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { PressSection } from '@/components/PressSection';
import { ImageText } from '@/components/ImageText';
import { HeroSecondary } from '@/components/HeroSecondary';
import { ContactForm } from '@/components/ContactForm';
import { BackButton } from '@/components/BackButton';

export default function ServiceClient({ id, data, noticiasArea = [] }) {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 3;
	const totalPages = Math.ceil(noticiasArea.length / itemsPerPage);
	const currentNoticias = noticiasArea.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

	useEffect(() => {
		setCurrentPage(1);
	}, [id]);

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
					buttonText='Solicitar Evaluación'
					buttonLink='#formulario-evaluacion'
					imageSide='left'
					image={data.imagen}
					attribution={data.creditoFoto}
					imageAlt={`Imagen representativa de ${data.titulo}`}
					buttonType='primary'
					buttonVariant='dark'
				/>

				{/* SECCIÓN 1: ¿A quién está dirigido este servicio? */}
				{data.perfilCliente && (
					<div className='px-4 md:px-8 my-10'>
						<div className='bg-white p-8 md:p-12 shadow-lg border-l-4 border-[#e67e22] text-[#2c3e50]'>
							<span className='text-[#e67e22] font-bold uppercase tracking-[0.3em] text-[10px] block mb-2'>Perfil de Caso Viable</span>
							<h3 className='text-2xl md:text-3xl font-display font-semibold uppercase tracking-tight mb-6'>¿A quién está dirigido este servicio?</h3>
							<ul className='space-y-4 mb-8'>
								{data.perfilCliente.map((item, idx) => (
									<li key={idx} className='flex items-start gap-3 text-sm md:text-base text-[#546e7a] font-light leading-relaxed'>
										<CheckCircle2 size={18} className='text-[#e67e22] shrink-0 mt-1' />
										<span>{item}</span>
									</li>
								))}
							</ul>
							<a href='#formulario-evaluacion' className='btn-primary inline-block text-center'>
								{data.ctaPerfilText || 'Evaluar Mi Caso Ahora'}
							</a>
						</div>
					</div>
				)}

				{/* FORMULARIO DE CUALIFICACIÓN */}
				<div id='formulario-evaluacion' className='px-4 md:px-8 pb-16'>
					<ContactForm defaultArea={id} title={`Evaluación Legal: ${data.titulo}`} />
				</div>
				{/* SECCIÓN 2: MATCH AUTOMÁTICO DE PRENSA Y CASOS (SE OCULTA SI NO HAY REGISTROS) */}
				{noticiasArea.length > 0 && (
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
				)}
				<BackButton to='/areas-de-trabajo' text='Volver a Áreas de Trabajo' />
			</div>
		</div>
	);
}
