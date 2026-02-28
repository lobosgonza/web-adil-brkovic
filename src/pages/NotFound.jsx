import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<section className='min-h-screen flex flex-col items-center justify-center bg-[#fcfcfc] px-6 text-center'>
			{/* Divisor sutil con el color de la marca */}
			<div className='w-16 h-1 bg-brand-orange mb-8 mx-auto'></div>

			<h1 className='text-2xl md:text-3xl font-light text-brand-blue tracking-tight mb-4'>Contenido no disponible</h1>

			<p className='text-gray-500 mb-10 max-w-sm font-light leading-relaxed text-sm md:text-base'>
				La sección que intentas consultar no se encuentra disponible o ha sido reubicada permanentemente.
			</p>

			{/* Uso de Link para navegación interna sin recarga */}
			<Link to='/' className='btn-primary'>
				Volver al inicio
			</Link>
		</section>
	);
};

export default NotFound;
