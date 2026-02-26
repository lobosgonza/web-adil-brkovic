export const ImageStack = () => (
	<div className='relative h-80 w-full max-w-sm'>
		<div className='absolute inset-0 bg-gray-200 shadow-lg rotate-3 z-10 border-4 border-white'></div>
		<div className='absolute inset-0 bg-gray-300 shadow-lg -rotate-3 z-20 border-4 border-white'></div>
		<div className='absolute inset-0 bg-brand-blue shadow-lg z-30 border-4 border-white flex items-center justify-center text-white/20 font-bold uppercase tracking-widest text-xs'>
			Registro Histórico
		</div>
	</div>
);
