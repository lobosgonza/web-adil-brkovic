import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Newspaper } from 'lucide-react';
import { PressSection } from '../components/PressSection';
import { ImageText } from '../components/ImageText';
import { HeroSecondary } from '../components/HeroSecondary';
import { noticias } from '../data/prensa';
import CTASection from '../components/CTASection';

const ServicioTemplate = () => {
	const { id } = useParams();

	const contenidos = {
		'reparacion-ddhh': {
			titulo: 'Reparación y Derechos Humanos',
			titleSecondary: 'Justicia civil y reparaciones económicas para víctimas históricas.',
			descripcion:
				'Representamos judicialmente desde hace más tres décadas a víctimas de graves violaciones a los derechos humanos cometidas principalmente durante la dictadura militar (1973-1990), sus familias y organizaciones. Nuestro enfoque combina la dignidad de las víctimas con el rigor técnico necesario para obtener reparaciones justas ante el Estado.',
			imagen: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop',
		},
		'defensa-comunidades': {
			titulo: 'Defensa de Comunidades',
			titleSecondary: 'Litigación estratégica frente a daños socioambientales y colectivos.',
			descripcion:
				'Representamos judicialmente a grupos humanos que se ven vulnerados en su derecho a vivir en un medioambiente libre de contaminación o afectados por proyectos mineros, sanitarios o inmobiliarios. Buscamos el equilibrio entre el desarrollo y el respeto a la salud pública y el entorno social.',
			imagen: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
		},
		'litigios-indemnizatorios': {
			titulo: 'Litigios Indemnizatorios',
			titleSecondary: 'Especialistas en obtener justicia frente a negligencias y accidentes.',
			descripcion:
				'Representación judicial en todo tipo de litigios indemnizatorios ya sea en materia civil, penal, laboral o administrativa, tales como Accidentes en el trabajo, tránsito, aéreos y negligencias médicas.',
			imagen: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
		},
		'defensa-administrativa': {
			titulo: 'Defensa Administrativa',
			titleSecondary: 'Resguardo frente al poder sancionador del Estado y sumarios.',
			descripcion:
				'Representación y defensa jurídica en sumarios administrativos contra funcionarios públicos y en procesos sancionatorios seguidos en contra de empresas reguladas.',
			imagen: 'https://images.unsplash.com/photo-1423592707957-3b212afa6733?q=80&w=1200&auto=format&fit=crop',
		},
		'justicia-previsional': {
			titulo: 'Justicia Previsional y PGU',
			titleSecondary: 'Gestión de pensiones y derechos de seguridad social ante el IPS.',
			descripcion:
				'Representamos judicialmente a personas beneficiarias de la Ley Valech y Exonerados Políticos a quienes el Estado les ha denegado la PGU, buscando el pago retroactivo desde 2022.',
			imagen: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop',
		},
	};

	const data = contenidos[id];
	const noticiasRelacionadas = noticias.filter((n) => n.tag === id);

	if (!data) {
		return <div className='pt-40 text-center font-display text-[#2c3e50] uppercase'>Área no encontrada</div>;
	}

	return (
		<div className='pb-20 min-h-screen bg-[#F4F7F6] font-sans'>
			{/* 1. HERO SECUNDARIO OSCURO */}
			<HeroSecondary title={data.titulo} subtitle='Área de Especialidad' />

			<div className='max-w-7xl mx-auto px-6 pt-24'>
				{/* 2. BLOQUE PRINCIPAL */}
				<section className='bg-white p-10 md:p-16 shadow-sm rounded-sm mb-16'>
					<ImageText
						title={data.titulo}
						titleSecondary={data.titleSecondary}
						text={data.descripcion}
						buttonText='Solicitar Consulta'
						buttonLink='/contacto'
						imageSide='left'
						image={data.imagen}
						imageAlt={`Imagen representativa de ${data.titulo}`}
						buttonVariant='dark'
					/>
				</section>

				{/* 3. PRENSA RELACIONADA */}
				{noticiasRelacionadas.length > 0 && (
					<div className='pt-12 border-t border-gray-200 mb-16'>
						<div className='flex items-center gap-3 mb-8'>
							<Newspaper size={20} className='text-[#e67e22]' />
							<h2 className='font-display font-semibold text-[#2c3e50] uppercase tracking-widest text-sm'>Casos en la Prensa Relacionados</h2>
						</div>
						<div className='mt-16'>
							<PressSection
								title='Casos Relacionados'
								subtitle='Hitos Judiciales en la Prensa'
								noticiasFiltradas={noticiasRelacionadas} // Muestra solo las del tag
							/>
						</div>
					</div>
				)}

				{/* 4. CTA DE CIERRE */}
				<CTASection variant='full' />

				{/* 5. BOTÓN VOLVER SIMPLIFICADO */}
				<div className='mt-20 flex justify-center'>
					<Link
						to='/areas-de-trabajo'
						className='group flex items-center gap-2 text-[#778696] hover:text-[#e67e22] transition-colors text-xs uppercase tracking-[0.2em] font-medium'>
						<ArrowLeft size={14} className='group-hover:-translate-x-1 transition-transform' />
						Volver a Áreas de Trabajo
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ServicioTemplate;
