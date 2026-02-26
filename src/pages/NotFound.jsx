const NotFound = () => {
	return (
		<section className='min-h-screen flex flex-col items-center justify-center bg-brand-gray px-6 text-center'>
			<h1 className='text-9xl font-black text-brand-blue/20'>404</h1>
			<h2 className='text-3xl font-bold text-brand-blue -mt-12 mb-6'>Página no encontrada</h2>
			<p className='text-gray-600 mb-8 max-w-md'>Lo sentimos, la sección que buscas no existe o ha sido movida.</p>
			<a href='/' className='bg-brand-blue text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-brand-gold transition-all'>
				Volver al inicio
			</a>
		</section>
	);
};

export default NotFound; // <--- ESTA LÍNEA ES LA QUE FALTA
