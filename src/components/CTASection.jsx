import { Link } from 'react-router-dom';

const CTASection = () => {
	return (
		<section className='mt-32 mb-20 px-6'>
			<div className='max-w-5xl mx-auto py-20 border-t border-gray-100 flex flex-col items-center text-center'>
				{/* Etiqueta superior sutil */}
				<span className='text-[#778696] font-light uppercase tracking-[0.5em] text-[10px] mb-8'>Consulta Profesional</span>

				{/* Título minimalista pero de gran escala */}
				<h2 className='font-display text-4xl md:text-6xl text-[#2c3e50] font-light uppercase tracking-tighter leading-tight mb-12'>
					¿Iniciamos la revisión <br />
					<span className='font-bold italic'>de su caso?</span>
				</h2>

				{/* El Botón es el protagonista absoluto */}
				<div className='relative group'>
					{/* Sombra de acento naranja que solo aparece en hover */}
					<div className='absolute inset-0 bg-[#e67e22] blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500'></div>

					<Link
						to='/contacto'
						className='relative inline-block bg-[#e67e22] text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#2c3e50] transition-all duration-500 shadow-xl'>
						Solicitar Entrevista Técnica
					</Link>
				</div>

				{/* Bajada de texto muy ligera */}
				<p className='mt-12 text-[#778696] font-light text-sm max-w-md tracking-wide'>Evaluación exhaustiva de antecedentes jurídicos bajo estricta confidencialidad.</p>
			</div>
		</section>
	);
};

export default CTASection;
