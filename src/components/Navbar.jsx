import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const servicios = [
		{ name: 'Justicia y DD.HH.', path: '/servicio/reparacion-ddhh' },
		{ name: 'Defensa de Comunidades', path: '/servicio/defensa-comunidades' },
		{ name: 'Litigios Indemnizatorios', path: '/servicio/litigios-indemnizatorios' },
		{ name: 'Defensa Administrativa', path: '/servicio/defensa-administrativa' },
		{ name: 'Justicia Previsional', path: '/servicio/justicia-previsional' },
	];

	return (
		<nav className='fixed top-0 w-full z-50 bg-[#2c3e50] shadow-xl font-sans'>
			<div className='max-w-7xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center'>
				{/* LOGO */}
				<Link to='/' className='flex flex-col group' onClick={() => setIsOpen(false)}>
					<span className='font-display text-2xl tracking-tighter text-white leading-none group-hover:text-[#e67e22] transition-colors font-semibold'>ADIL</span>
					<span className='font-display text-2xl tracking-tighter text-white leading-none group-hover:text-[#e67e22] transition-colors font-semibold'>BRKOVIC</span>
				</Link>

				{/* DESKTOP NAV */}
				<div className='hidden md:flex gap-10 items-center'>
					<Link to='/' className='text-xs uppercase tracking-widest text-white/80 hover:text-[#e67e22] transition-colors font-medium'>
						Inicio
					</Link>
					<Link to='/trayectoria' className='text-xs uppercase tracking-widest text-white/80 hover:text-[#e67e22] transition-colors font-medium'>
						Trayectoria
					</Link>

					{/* DROPDOWN ÁREAS DE TRABAJO */}
					<div className='relative h-20 flex items-center' onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
						<button className='flex items-center gap-1 text-xs uppercase tracking-widest text-white/80 hover:text-[#e67e22] transition-colors font-medium cursor-pointer'>
							Áreas de Trabajo <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
						</button>

						{/* Menú Desplegable Desktop */}
						<div
							className={`absolute top-20 -left-4 w-72 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
							{/* CONTENEDOR BLANCO PURO */}
							<div className='bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-t-4 border-[#e67e22] py-2 rounded-b-sm'>
								{servicios.map((s) => (
									<Link
										key={s.path}
										to={s.path}
										onClick={() => setIsDropdownOpen(false)}
										className='block px-8 py-4 text-[11px] uppercase tracking-[0.15em] text-[#2c3e50] hover:bg-[#f4f7f6] hover:text-[#e67e22] transition-all duration-200 font-semibold border-b border-gray-100 last:border-0'>
										{s.name}
									</Link>
								))}
							</div>
						</div>
					</div>

					<Link to='/contacto' className='border border-[#e67e22] text-white px-5 py-2 text-xs font-medium uppercase tracking-widest hover:bg-[#e67e22] transition-all'>
						Contacto
					</Link>
				</div>

				{/* MOBILE BURGER */}
				<button className='md:hidden text-white' onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>
			</div>

			{/* MOBILE MENU */}
			<div className={`fixed inset-0 top-20 bg-[#2c3e50] transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-40 overflow-y-auto`}>
				<div className='flex flex-col p-10 gap-8 text-white'>
					<Link to='/' onClick={() => setIsOpen(false)} className='text-3xl font-display font-semibold uppercase tracking-tighter hover:text-[#e67e22]'>
						Inicio
					</Link>
					<Link to='/trayectoria' onClick={() => setIsOpen(false)} className='text-3xl font-display font-semibold uppercase tracking-tighter hover:text-[#e67e22]'>
						Trayectoria
					</Link>

					<div className='flex flex-col gap-4 border-t border-white/10 pt-6'>
						<span className='text-[#e67e22] text-xs font-bold uppercase tracking-widest'>Áreas de Trabajo</span>
						{servicios.map((s) => (
							<Link key={s.path} to={s.path} onClick={() => setIsOpen(false)} className='text-white/70 text-lg font-light hover:text-white'>
								{s.name}
							</Link>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};

// EXPORTACIÓN POR DEFECTO PARA App.jsx
export default Navbar;
