import { useEffect } from 'react';

const PoliticaPrivacidad = () => {
	// Asegura que al entrar la página esté al inicio
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const secciones = [
		{
			titulo: '1. INFORMACIÓN GENERAL',
			contenido:
				'El acceso a este sitio web es gratuito y tiene como objetivo principal informar sobre la trayectoria profesional, hitos judiciales y las áreas de práctica jurídica de Adil Brkovic. El uso de este sitio no constituye, por sí mismo, una relación abogado-cliente.',
		},
		{
			titulo: '2. TRATAMIENTO DE DATOS PERSONALES',
			contenido:
				'En cumplimiento con la Ley N° 19.628 sobre Protección de la Vida Privada (Chile), informamos que los datos proporcionados a través de nuestro botón de WhatsApp se utilizarán exclusivamente para gestionar su consulta legal. Toda información está protegida bajo el estricto deber de secreto profesional.',
		},
		{
			titulo: '3. NATURALEZA DEL CONTENIDO',
			contenido:
				"La información contenida en las secciones de 'Áreas de Trabajo' tiene fines meramente informativos. No debe ser considerada como asesoría legal formal. Cada caso es único; le recomendamos solicitar una entrevista técnica.",
		},
		{
			titulo: '4. PROPIEDAD INTELECTUAL',
			contenido:
				'Los contenidos, textos e imágenes de hitos históricos están protegidos por leyes de propiedad intelectual. Queda prohibida su reproducción sin autorización expresa.',
		},
	];

	return (
		<div className='pt-40 pb-20 px-6 bg-[#F4F7F6] min-h-screen font-sans'>
			<div className='max-w-4xl mx-auto bg-white p-8 md:p-16 shadow-sm border-t-4 border-[#e67e22]'>
				<h1 className='font-display text-4xl font-semibold text-[#2c3e50] mb-2 tracking-tighter uppercase'>Políticas de Privacidad</h1>

				<p className='text-[#e67e22] font-semibold text-xs mb-12 tracking-widest uppercase'>Última actualización: Febrero, 2026</p>

				<div className='space-y-12'>
					{secciones.map((seccion, index) => (
						<div key={index} className='border-l-2 border-[#778696]/20 pl-8'>
							<h2 className='font-display text-lg font-semibold text-[#2c3e50] mb-3 uppercase tracking-tight'>{seccion.titulo}</h2>
							<p className='text-[#778696] leading-relaxed text-sm font-light italic'>{seccion.contenido}</p>
						</div>
					))}
				</div>

				<div className='mt-20 p-8 bg-[#F4F7F6] border border-gray-100'>
					<p className='text-xs text-[#778696] font-light italic'>
						Para cualquier duda respecto a sus datos, puede comunicarse directamente a:
						<span className='font-semibold text-[#2c3e50] ml-2 not-italic underline'>adilbrkovic@gmail.com</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default PoliticaPrivacidad;
