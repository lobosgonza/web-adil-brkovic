import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { WHATSAPP_URL } from '../constants/contact';
import { AREAS_TRABAJO } from '../constants/routes';

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const location = useLocation();

	const servicios = AREAS_TRABAJO.map((area) => ({
		name: area.name,
		path: `/areas-de-trabajo/${area.id}`,
	}));

	// Función para cerrar todo al navegar
	const closeMenus = () => {
		setIsOpen(false);
		setIsDropdownOpen(false);
	};

	return (
		<nav className='fixed top-0 w-full z-70 bg-[#2c3e50] shadow-xl font-sans border-b border-white/5'>
			<div className='max-w-7xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center'>
				{/* LOGO */}
				<Link to='/' className='flex flex-col group' onClick={closeMenus}>
					<span className='font-display text-2xl tracking-tighter text-white leading-none group-hover:text-[#e67e22] transition-colors font-semibold'>
						ESTUDIO JURÍDICO BRKOVIC
					</span>
				</Link>

				{/* DESKTOP NAV */}
				<div className='hidden md:flex gap-10 items-center'>
					<Link to='/' className='text-xs uppercase tracking-widest text-white/80 hover:text-[#e67e22] transition-colors font-medium'>
						Inicio
					</Link>
					<Link to='/trayectoria' className='text-xs uppercase tracking-widest text-white/80 hover:text-[#e67e22] transition-colors font-medium'>
						Trayectoria
					</Link>

					{/* DROPDOWN ÁREAS DE TRABAJO (LINK AL HUB + MENU) */}
					<div className='relative h-20 flex items-center' onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
						{/* Ahora es un LINK al Hub, no solo un botón */}
						<Link
							to='/areas-de-trabajo'
							className='flex items-center gap-1 text-xs uppercase tracking-widest text-white/80 hover:text-[#e67e22] transition-colors font-medium cursor-pointer'
							onClick={closeMenus}>
							Áreas de Trabajo
							<ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
						</Link>

						{/* Menú Desplegable Desktop */}
						<div
							className={`absolute top-20 -left-4 w-72 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
							<div className='bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-t-4 border-[#e67e22] py-2 rounded-b-sm'>
								{servicios.map((s) => (
									<Link
										key={s.path}
										to={s.path}
										onClick={closeMenus}
										className='block px-8 py-4 text-[11px] uppercase tracking-[0.15em] text-[#2c3e50] hover:bg-[#f4f7f6] hover:text-[#e67e22] transition-all duration-200 font-semibold border-b border-gray-100 last:border-0'>
										{s.name}
									</Link>
								))}
								{/* Link extra al final del dropdown para ir al Hub */}
								<Link
									to='/areas-de-trabajo'
									onClick={closeMenus}
									className='block px-8 py-3 text-[10px] uppercase tracking-widest text-[#e67e22] bg-gray-50 hover:bg-[#e67e22] hover:text-white transition-colors font-bold text-center'>
									Ver todas las áreas →
								</Link>
							</div>
						</div>
					</div>

					<a
						href={WHATSAPP_URL}
						target='_blank'
						rel='noopener noreferrer'
						className='border border-[#e67e22] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-[#e67e22] transition-all duration-300'>
						Contacto
					</a>
				</div>

				{/* MOBILE BURGER */}
				<button className='md:hidden text-white' onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* MOBILE MENU */}
			<div className={`fixed inset-0 top-20 bg-[#2c3e50]  transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden overflow-y-auto`}>
				<div className='flex flex-col p-10 gap-4 text-white'>
					<Link to='/' onClick={closeMenus} className='pt-1 text-xl font-display font-semibold uppercase tracking-tighter'>
						Inicio
					</Link>
					<Link to='/trayectoria' onClick={closeMenus} className='pt-1 text-xl font-display font-semibold uppercase tracking-tighter'>
						Trayectoria
					</Link>
					<Link to='/areas-de-trabajo' onClick={closeMenus} className='pt-1 text-xl font-display font-semibold uppercase tracking-tighter text-[#e67e22]'>
						Áreas de Trabajo
					</Link>

					<div className='flex flex-col gap-4 border-t border-white/10 pt-6'>
						{servicios.map((s) => (
							<Link key={s.path} to={s.path} onClick={closeMenus} className='pt-1 text-white/70 text-lg font-light'>
								{s.name}
							</Link>
						))}
					</div>

					<Link to='/contacto' onClick={closeMenus} className='bg-[#e67e22] text-white text-center py-4 uppercase tracking-widest font-bold text-sm'>
						Contacto
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
