import { Link } from 'react-router-dom';
import { AREAS_TRABAJO } from '../constants/routes';
// Añadimos ChevronRight a la lista de iconos importados
import { Mail, Phone, MapPin, ChevronRight, User, ArrowUp } from 'lucide-react';

import { WHATSAPP_URL, CONTACT_EMAIL, PHONE_NUMBER } from '../constants/contact';

const Footer = () => {
	// Cambiamos el nombre a 'areas' para que coincida con el .map de abajo
	const servicios = AREAS_TRABAJO.map((area) => ({
		name: area.name,
		path: `/areas-de-trabajo/${area.id}`,
	}));

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<footer className='section-light py-10 px-6 max-w-7xl mx-auto '>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16'>
				{/* COLUMNA 1: IDENTIDAD Y TRAYECTORIA */}
				<div className='space-y-6'>
					<div className='flex flex-col'>
						<span className='font-display text-3xl font-semibold tracking-tighter leading-none '>ESTUDIO JURÍDICO</span>
						<span className='font-display text-3xl font-semibold tracking-tighter leading-none '>BRKOVIC</span>
						<span className='text-[#e67e22] text-[10px] font-bold uppercase tracking-[0.3em] mt-2'>Abogado</span>
					</div>
					<p className='text-[#778696] text-sm font-light leading-relaxed max-w-xs italic'>
						Treinta años de trayectoria dedicados a la defensa técnica y ética en casos de alta complejidad.
					</p>

					{/* ENLACE A TRAYECTORIA AÑADIDO AQUÍ PARA SEO/SITEMAP */}
					<Link to='/trayectoria' className='group flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2c3e50] hover:text-[#e67e22] transition-colors'>
						<User size={14} className='text-[#e67e22]' />
						Conocer Trayectoria
						<ChevronRight size={12} className='opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all' />
					</Link>
				</div>

				{/* COLUMNA 2: ÁREAS DE TRABAJO */}
				<div className='space-y-6'>
					<Link to='/areas-de-trabajo' className='group flex items-center gap-2 border-b border-[#e67e22] pb-2 w-fit'>
						<h4 className=' font-display font-semibold uppercase tracking-widest text-xs group-hover:text-[#e67e22] transition-colors'>Áreas de Trabajo</h4>
						<ChevronRight size={14} className='text-[#e67e22] group-hover:translate-x-1 transition-transform' />
					</Link>

					<ul className='space-y-3'>
						{servicios.map((a) => (
							<li key={a.path}>
								<Link to={a.path} className=' text-[11px] hover:text-[#e67e22] transition-colors font-light uppercase tracking-wider'>
									{a.name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* COLUMNA 3: CONTACTO */}
				<div className='space-y-6'>
					<h4 className='font-display font-semibold uppercase tracking-widest text-xs border-b border-[#e67e22] pb-2 w-fit'>Contacto</h4>
					<ul className='space-y-5'>
						<li className='flex items-start gap-4'>
							<Mail size={18} className='text-[#e67e22] shrink-0' />
							<div className='flex flex-col gap-1'>
								<span className='uppercase text-[9px] tracking-widest font-bold'>Correo Electrónico</span>
								<a href={`mailto:${CONTACT_EMAIL}`} className='hover:text-[#e67e22] transition-colors text-sm font-light'>
									{CONTACT_EMAIL}
								</a>
							</div>
						</li>
						<li className='flex items-start gap-4'>
							<Phone size={18} className='text-[#e67e22] shrink-0' />
							<div className='flex flex-col gap-1'>
								<span className='/40 uppercase text-[9px] tracking-widest font-bold'>Teléfono</span>
								<a href={WHATSAPP_URL} target='_blank' rel='noopener noreferrer' className='hover:text-[#e67e22] transition-colors text-sm font-light'>
									+{PHONE_NUMBER}
								</a>
							</div>
						</li>
						<li className='flex items-start gap-4'>
							<MapPin size={18} className='text-[#e67e22] shrink-0' />
							<div className='flex flex-col gap-1'>
								<span className='/40 uppercase text-[9px] tracking-widest font-bold'>Ubicación</span>
								<span className='text-sm /90 font-light'>Santiago, Chile</span>
							</div>
						</li>
					</ul>
				</div>
			</div>

			{/* CRÉDITOS FINALES */}
			<div className='max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 relative'>
				{/* BOTÓN IR ARRIBA (Centrado en móvil, derecha en desktop) */}
				<button onClick={scrollToTop} className='group flex flex-col items-center gap-2 text-[#778696] hover:text-[#e67e22] transition-all duration-300'>
					<div className='p-2 rounded-full border border-gray-100 group-hover:border-[#e67e22] transition-colors'>
						<ArrowUp size={16} />
					</div>
					<span className='text-[9px] uppercase tracking-[0.3em] font-bold'>Ir al top</span>
				</button>

				<div className='flex flex-col md:flex-row items-center gap-4 md:gap-8'>
					<Link
						to='/politica-de-privacidad'
						className='text-[10px] text-[#778696] hover:text-[#2c3e50] uppercase tracking-[0.1em] font-light transition-colors underline underline-offset-4 decoration-gray-200'>
						Política de Privacidad
					</Link>

					<p className='text-[10px] uppercase tracking-[0.2em] text-[#778696] font-light italic'>
						Diseño y estrategia por{' '}
						<a href='https://expansispro.com' target='_blank' rel='noopener noreferrer' className='font-semibold text-[#e67e22] transition-colors duration-300 hover:underline'>
							Expansis Pro
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
