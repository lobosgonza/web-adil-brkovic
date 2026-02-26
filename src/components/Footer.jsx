import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
	const servicios = [
		{ name: 'Justicia y DD.HH.', path: '/servicio/reparacion-ddhh' },
		{ name: 'Defensa de Comunidades', path: '/servicio/defensa-comunidades' },
		{ name: 'Litigios Indemnizatorios', path: '/servicio/litigios-indemnizatorios' },
		{ name: 'Defensa Administrativa', path: '/servicio/defensa-administrativa' },
		{ name: 'Justicia Previsional', path: '/servicio/justicia-previsional' },
	];

	return (
		<footer className='bg-[#2c3e50] text-white pt-20 pb-10 px-6 font-sans'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16'>
				{/* COLUMNA 1: IDENTIDAD PROFESIONAL */}
				<div className='space-y-6'>
					<div className='flex flex-col'>
						<span className='font-display text-2xl font-semibold tracking-tighter leading-none text-white'>ADIL</span>
						<span className='font-display text-2xl font-semibold tracking-tighter leading-none text-white'>BRKOVIC</span>
						<span className='text-[#e67e22] text-[10px] font-bold uppercase tracking-[0.3em] mt-2'>Abogado</span>
					</div>
					<p className='text-[#778696] text-sm font-light leading-relaxed max-w-xs italic'>
						"Treinta años de trayectoria dedicados a la defensa técnica y ética en casos de alta complejidad."
					</p>
				</div>

				{/* COLUMNA 2: ÁREAS DE PRÁCTICA (TODO EN BLANCO) */}
				<div className='space-y-6'>
					<h4 className='!text-white font-display font-semibold uppercase tracking-widest text-xs border-b border-[#e67e22] pb-2 w-fit'>Áreas de Práctica</h4>
					<ul className='space-y-3'>
						{servicios.map((s) => (
							<li key={s.path}>
								<Link to={s.path} className='text-white/90 text-[11px] hover:text-[#e67e22] transition-colors font-light uppercase tracking-wider'>
									{s.name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* COLUMNA 3: CONTACTO */}
				<div className='space-y-6'>
					<h4 className='!text-white font-display font-semibold uppercase tracking-widest text-xs border-b border-[#e67e22] pb-2 w-fit'>Contacto</h4>
					<ul className='space-y-5'>
						<li className='flex items-start gap-4'>
							<Mail size={18} className='text-[#e67e22] shrink-0' />
							<div className='flex flex-col gap-1'>
								<span className='text-white/40 uppercase text-[9px] tracking-widest font-bold'>Correo Electrónico</span>
								<a href='mailto:adilbrkovic@gmail.com' className='hover:text-[#e67e22] transition-colors text-sm text-white/90'>
									adilbrkovic@gmail.com
								</a>
							</div>
						</li>
						<li className='flex items-start gap-4'>
							<Phone size={18} className='text-[#e67e22] shrink-0' />
							<div className='flex flex-col gap-1'>
								<span className='text-white/40 uppercase text-[9px] tracking-widest font-bold'>Teléfono</span>
								<span className='text-sm text-white/90'>+56 9 2222 2222</span>
							</div>
						</li>
						<li className='flex items-start gap-4'>
							<MapPin size={18} className='text-[#e67e22] shrink-0' />
							<div className='flex flex-col gap-1'>
								<span className='text-white/40 uppercase text-[9px] tracking-widest font-bold'>Ubicación</span>
								<span className='text-sm text-white/90'>Santiago, Chile</span>
							</div>
						</li>
					</ul>
				</div>
			</div>

			{/* CRÉDITOS FINALES */}
			<div className='max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left'>
				<Link
					to='/politica-de-privacidad'
					className='text-[10px] text-[#778696] hover:text-white uppercase tracking-[0.1em] font-light transition-colors underline underline-offset-4 decoration-white/10'>
					Política de Privacidad
				</Link>
				<p className='text-[10px] uppercase tracking-[0.2em] text-[#778696] font-light italic'>
					Diseño y estrategia por <span className='text-[#e67e22] font-semibold not-italic'>Expansis Pro</span>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
