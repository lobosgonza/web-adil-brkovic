import { MessageCircle } from 'lucide-react';

export const WhatsAppCTA = () => {
	// Reemplaza con el número real de Adil
	const phoneNumber = '56922222222';
	const message = 'Hola, quisiera solicitar una asesoría jurídica.';
	const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

	return (
		<a href={whatsappUrl} target='_blank' rel='noopener noreferrer' className='fixed bottom-8 right-8 z-[60] group flex items-center' aria-label='Contactar por WhatsApp'>
			{/* Tooltip lateral que aparece al hacer hover */}
			<span className='mr-3 px-4 py-2 bg-white text-[#2c3e50] text-xs font-bold uppercase tracking-widest shadow-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block'>
				Asesoría Directa
			</span>

			{/* Círculo del Botón */}
			<div className='relative'>
				{/* Efecto de pulso animado */}
				<div className='absolute inset-0 bg-[#2e7d32] rounded-full animate-ping opacity-20'></div>

				<div className='relative bg-[#2e7d32] text-white p-4 rounded-full shadow-[0_10px_25px_rgba(46,125,50,0.3)] hover:scale-110 hover:bg-[#256629] transition-all duration-300 flex items-center justify-center'>
					<MessageCircle size={28} />
				</div>
			</div>
		</a>
	);
};

export default WhatsAppCTA;
