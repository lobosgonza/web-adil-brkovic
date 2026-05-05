import { useParams, Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react'; // FIX: Agregado useRef aquí
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PressSection } from '../components/PressSection';
import { ImageText } from '../components/ImageText';
import { HeroSecondary } from '../components/HeroSecondary';
import { noticias } from '../data/prensa';
import CTASection from '../components/CTASection';
import { contenidos } from '../data/areasDeTrabajo';
import { WHATSAPP_URL } from '../constants/contact'; // Importamos la URL de contacto

const ServicioTemplate = () => {
	const { id } = useParams();

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;

	const totalPages = Math.ceil(noticias.length / itemsPerPage);
	const currentNoticias = noticias.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

	const data = contenidos[id];

	// Efecto para cambiar de servicio
	useEffect(() => {
		if (data) {
			document.title = `${data.titulo} | Adil Brkovic`;
			window.scrollTo(0, 0);
			setCurrentPage(1);
		}
	}, [id]); // Solo cuando cambia el ID de la URL

	// Efecto para scroll suave al cambiar página de prensa
	const prensaRef = useRef(null);
	useEffect(() => {
		// Solo scrolleamos si el usuario no está en la página 1 (para evitar scroll al cargar)
		if (currentPage > 1 && prensaRef.current) {
			prensaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}, [currentPage]);

	if (!data) return <div className='pt-40 text-center font-display text-[#2c3e50] uppercase'>Área no encontrada</div>;

	return (
		<div>
			<HeroSecondary
				title={data.titulo}
				subtitle='Área de Especialidad'
				image={data.imagen} // <-- Pasamos la imagen del área de trabajo
			/>

			<div className='max-w-7xl mx-auto'>
				<ImageText
					title={data.titulo}
					titleSecondary={data.titleSecondary}
					text={data.descripcion}
					buttonText='Solicitar Consulta'
					buttonLink={WHATSAPP_URL}
					imageSide='left'
					image={data.imagen}
					attribution={data.creditoFoto} // <-- PASAR ESTO AQUÍ
					imageAlt={`Imagen representativa de ${data.titulo}`}
					buttonType='primary'
					buttonVariant='dark'
				/>

				{/* FIX: Agregada la ref={prensaRef} aquí para que el scroll sepa dónde ir */}
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
};

export default ServicioTemplate;
