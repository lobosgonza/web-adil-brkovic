import { MessageCircle } from 'lucide-react';
import { BackButton } from './BackButton';

const CTASection = ({ backTo, backText }) => {
	return (
		<>
			<div className='w-full overflow-hidden relative bg-[#2c3e50]'>
				<div className='absolute inset-0 bg-gradient-to-br from-[#2c3e50] via-[#1a252f] to-[#2c3e50] opacity-100'></div>
				<div className='absolute -right-20 -bottom-20 w-80 h-80 bg-[#e67e22]/5 rounded-full blur-3xl'></div>

				<div className='max-w-7xl mx-auto relative z-10 px-8 py-20 md:px-20 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-12'>
					<div className='text-left max-w-2xl'>
						<div className='flex items-center gap-3 mb-6'>
							<span className='w-12 h-[1px] bg-[#e67e22]'></span>
							<span className='text-[#e67e22] font-bold uppercase tracking-[0.4em] text-[10px]'>Atención Inmediata</span>
						</div>

						<h2 className='uppercase font-display text-4xl md:text-5xl !text-white font-medium leading-[1.1] tracking-tighter'>¿Necesitas asesoría legal?</h2>
						<p className='mt-8 text-gray-400'>Hablemos directamente para una evaluación preliminar de tu caso vía WhatsApp.</p>
					</div>

					<div className='flex flex-col sm:flex-row items-center gap-6'>
						<a
							href='https://wa.me/56953960666'
							target='_blank'
							rel='noopener noreferrer'
							className='group relative inline-flex items-center gap-4 bg-[#e67e22] text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 hover:bg-white hover:text-[#e67e22] shadow-xl'>
							<MessageCircle size={18} className='fill-current' />
							Contactar vía WhatsApp
						</a>
					</div>
				</div>
			</div>

			{backTo && <BackButton to={backTo} text={backText} />}
		</>
	);
};

export default CTASection;
