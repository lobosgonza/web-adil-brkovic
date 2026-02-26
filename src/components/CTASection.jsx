const CTASection = ({ variant = 'full' }) => {
	// Variante para el Sidebar (más compacto)
	if (variant === 'sidebar') {
		return (
			<div className='bg-[#2c3e50] p-8 text-center text-white shadow-lg'>
				<p className='text-[10px] uppercase tracking-widest mb-4 opacity-60 font-bold'>¿Necesita asesoría?</p>
				<h4 className='font-display font-semibold text-lg mb-6 leading-tight !text-white'>Evaluamos la viabilidad técnica de su caso.</h4>
				<a
					href='#contacto'
					className='inline-block w-full py-3 border border-[#e67e22] text-[#e67e22] text-xs font-bold uppercase tracking-widest hover:bg-[#e67e22] hover:text-white transition-all duration-300'>
					Iniciar Consulta
				</a>
			</div>
		);
	}

	// Variante Full Width (para el final de las páginas)
	return (
		<section className='mt-24 bg-white border-t-4 border-[#e67e22] p-12 md:p-20 text-center shadow-sm'>
			<div className='max-w-3xl mx-auto space-y-8'>
				<h2 className='font-display text-3xl md:text-4xl font-semibold text-[#2c3e50] uppercase tracking-tighter leading-none'>¿Iniciamos la revisión de su caso?</h2>
				<p className='text-[#778696] font-light text-lg md:text-xl max-w-2xl mx-auto'>
					Analizamos los antecedentes técnicos y jurídicos para determinar la viabilidad de su requerimiento legal bajo los más altos estándares éticos.
				</p>
				<div className='pt-6'>
					<a
						href='#contacto'
						className='inline-block bg-[#2c3e50] text-white px-12 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#e67e22] transition-all duration-300 shadow-xl'>
						Solicitar Entrevista Técnica
					</a>
				</div>
			</div>
		</section>
	);
};

export default CTASection;
