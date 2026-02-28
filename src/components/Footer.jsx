import { Link } from 'react-router-dom';
// Añadimos ChevronRight a la lista de iconos importados
import { Mail, Phone, MapPin, ChevronRight, User } from 'lucide-react';

const Footer = () => {
	// Cambiamos el nombre a 'areas' para que coincida con el .map de abajo
	const areas = [
		{ name: 'Justicia y DD.HH.', path: '/servicio/reparacion-ddhh' },
		{ name: 'Defensa de Comunidades', path: '/servicio/defensa-comunidades' },
		{ name: 'Litigios Indemnizatorios', path: '/servicio/litigios-indemnizatorios' },
		{ name: 'Defensa Administrativa', path: '/servicio/defensa-administrativa' },
		{ name: 'Justicia Previsional', path: '/servicio/justicia-previsional' },
	];

	return (
		<footer className='section-light py-10 px-6 max-w-7xl mx-auto '>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16'>
				{/* COLUMNA 1: IDENTIDAD Y TRAYECTORIA */}
				<div className='space-y-6'>
					<div className='flex flex-col'>
						<span className='font-display text-3xl font-semibold tracking-tighter leading-none '>ADIL</span>
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
						{areas.map((a) => (
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
					<h4 className='! font-display font-semibold uppercase tracking-widest text-xs border-b border-[#e67e22] pb-2 w-fit'>Contacto</h4>
					<ul className='space-y-5'>
						<li className='flex items-start gap-4'>
							<Mail size={18} className='text-[#e67e22] shrink-0' />
							<div className='flex flex-col gap-1'>
								<span className='uppercase text-[9px] tracking-widest font-bold'>Correo Electrónico</span>
								<a href='mailto:adilbrkovic@gmail.com' className='hover:text-[#e67e22] transition-colors text-sm /90 font-light'>
									adilbrkovic@gmail.com
								</a>
							</div>
						</li>
						<li className='flex items-start gap-4'>
							<Phone size={18} className='text-[#e67e22] shrink-0' />
							<div className='flex flex-col gap-1'>
								<span className='/40 uppercase text-[9px] tracking-widest font-bold'>Teléfono</span>
								<span className='text-sm /90 font-light'>+56 9 2222 2222</span>
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
			<div className='max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left'>
				<Link
					to='/politica-de-privacidad'
					className='text-[10px] text-[#778696] hover: uppercase tracking-[0.1em] font-light transition-colors underline underline-offset-4 decoration-white/10'>
					Política de Privacidad
				</Link>

				<p className='text-[10px] uppercase tracking-[0.2em] text-[#778696] font-light italic'>
					Diseño y estrategia por{' '}
					<a
						href='https://expansispro.com' // Asegúrate de que esta sea la URL correcta
						target='_blank'
						rel='noopener noreferrer'
						className='font-semibold text-brand-gold text-[#e67e22] transition-colors duration-300 underline-offset-4 hover:underline'>
						Expansis Pro
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
