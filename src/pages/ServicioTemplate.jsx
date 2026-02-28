import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
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
	// Actualiza el título de la pestaña automáticamente
	useEffect(() => {
		if (data) {
			document.title = `${data.titulo} | Adil Brkovic`;
		}
	}, [data]);
	if (!data) {
		return <div className='pt-40 text-center font-display text-[#2c3e50] uppercase'>Área no encontrada</div>;
	}

	return (
		<div>
			{/* 1. HERO SECUNDARIO OSCURO */}
			<HeroSecondary title={data.titulo} subtitle='Área de Especialidad' />

			<div className='sm:px-12 max-w-7xl mx-auto'>
				{/* 2. BLOQUE PRINCIPAL */}

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

				{/* 3. PRENSA RELACIONADA */}
				{noticiasRelacionadas.length > 0 && (
					<div className=''>
						{' '}
						{/* Quitamos border-t y border-gray-200 */}
						<PressSection title='Casos Relacionados' subtitle='Hitos Judiciales en la Prensa' noticiasFiltradas={noticiasRelacionadas} />
					</div>
				)}
			</div>
			{/* 4. CTA DE CIERRE */}
			<CTASection backTo='/areas-de-trabajo' backText='Volver a Áreas de Trabajo' />
		</div>
	);
};

export default ServicioTemplate;
