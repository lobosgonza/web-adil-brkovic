import { contenidos } from '@/data/areasDeTrabajo';
import { noticias } from '@/data/prensa';
import { notFound } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { ImageText } from '@/components/ImageText';
import { HeroSecondary } from '@/components/HeroSecondary';
import { ContactForm } from '@/components/ContactForm';
import { BackButton } from '@/components/BackButton';
import AreaPress from './AreaPress';

export async function generateStaticParams() {
	return Object.keys(contenidos).map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
	const { id } = await params;
	const data = contenidos[id];
	if (!data) return { title: 'Área no encontrada' };

	return {
		title: `${data.titulo} | Adil Brkovic`,
		description: data.resumenHome,
		alternates: {
			canonical: `https://estudiobrkovic.cl/areas-de-trabajo/${id}`,
		},
	};
}

export default async function ServicioPage({ params }) {
	const { id } = await params;
	const data = contenidos[id];

	if (!data) notFound();

	const noticiasArea = noticias.filter((item) => item.tag === id);

	const serviceSchema = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: data.titulo,
		description: data.resumenHome,
		provider: {
			'@type': 'LegalService',
			name: 'Estudio Jurídico Brkovic',
			url: 'https://estudiobrkovic.cl/',
		},
		serviceType: 'LegalService',
		url: `https://estudiobrkovic.cl/areas-de-trabajo/${id}`,
	};

	return (
		<>
			<script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
			<div>
				<HeroSecondary title={data.titulo} subtitle='Área de Especialidad' image={data.imagen} />
				<div className='max-w-7xl mx-auto'>
					<ImageText
						title={data.titulo}
						titleSecondary={data.titleSecondary}
						text={data.descripcion}
						buttonText='Solicitar Evaluación'
						buttonLink='#formulario-evaluacion'
						imageSide='left'
						image={data.imagen}
						attribution={data.creditoFoto}
						imageAlt={`Imagen representativa de ${data.titulo}`}
						buttonType='primary'
						buttonVariant='dark'
					/>

					{data.perfilCliente && (
						<div className='px-4 md:px-8 my-10'>
							<div className='bg-white p-8 md:p-12 shadow-lg border-l-4 border-[#e67e22] text-[#2c3e50]'>
								<span className='text-[#e67e22] font-bold uppercase tracking-[0.3em] text-[10px] block mb-2'>Perfil de Caso Viable</span>
								<h3 className='text-2xl md:text-3xl font-display font-semibold uppercase tracking-tight mb-6'>¿A quién está dirigido este servicio?</h3>
								<ul className='space-y-4 mb-8'>
									{data.perfilCliente.map((item, idx) => (
										<li key={idx} className='flex items-start gap-3 text-sm md:text-base text-[#546e7a] font-light leading-relaxed'>
											<CheckCircle2 size={18} className='text-[#e67e22] shrink-0 mt-1' />
											<span>{item}</span>
										</li>
									))}
								</ul>
								<a href='#formulario-evaluacion' className='btn-primary inline-block text-center'>
									{data.ctaPerfilText || 'Evaluar Mi Caso Ahora'}
								</a>
							</div>
						</div>
					)}

					<div id='formulario-evaluacion' className='px-4 md:px-8 pb-16'>
						<ContactForm defaultArea={id} title={`Evaluación Legal: ${data.titulo}`} />
					</div>

					<AreaPress key={id} noticiasArea={noticiasArea} />
					<BackButton to='/areas-de-trabajo' text='Volver a Áreas de Trabajo' />
				</div>
			</div>
		</>
	);
}
