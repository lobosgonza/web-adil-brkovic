import { HeroHome } from '../components/HeroHome';
import { ServiceCard } from '../components/ServiceCard';
import { WhatsAppCTA } from '../components/WhatsAppCTA';
import { ImageText } from '../components/ImageText';

// Datos de ejemplo (Luego Martín los traerá del CMS o CSV)
const servicios = [
	{ id: 'reparacion-ddhh', titulo: 'Justicia y Derechos Humanos', extracto: 'Defensa de víctimas de violaciones a los DD.HH. y reparaciones contra el Estado.' },
	{ id: 'defensa-comunidades', titulo: 'Defensa de Comunidades', extracto: 'Litigación por daños ambientales y proyectos que afecten la calidad de vida.' },
	{ id: 'litigios-indemnizatorios', titulo: 'Litigios Indemnizatorios', extracto: 'Accidentes, negligencias médicas y responsabilidad civil.' },
	{ id: 'defensa-administrativa', titulo: 'Defensa Administrativa', extracto: 'Sumarios administrativos y procesos sancionatorios ante el Estado.' },
	{ id: 'justicia-previsional', titulo: 'Justicia Previsional y PGU', extracto: 'Gestión de PGU y pensiones para exonerados y Ley Valech.' },
];

const Home = () => {
	return (
		<div className='flex flex-col'>
			{/* LÁMINA 1: HERO PRINCIPAL */}
			<HeroHome />

			{/* LÁMINA 2: GRILLA DE SERVICIOS (Cards) */}
			<section id='areas' className='py-24 bg-white px-8'>
				<div className='container mx-auto'>
					<div className='mb-16 text-center'>
						<h2 className='text-brand-blue text-4xl font-black uppercase tracking-tighter'>Áreas de Trabajo</h2>
						<div className='w-24 h-1 bg-brand-gold mx-auto mt-4'></div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{servicios.map((servicio) => (
							<ServiceCard key={servicio.id} title={servicio.titulo} description={servicio.extracto} link={`/servicio/${servicio.id}`} />
						))}
					</div>
				</div>
			</section>

			{/* LÁMINA 3: TEASER DE TRAYECTORIA (Imagen + Texto) */}
			<section className='py-20 bg-brand-gray/30 px-8'>
				<div className='container mx-auto'>
					<ImageText
						title='Trayectoria Profesional'
						subtitle='Sobre Adil Brkovic'
						text='Con más de 30 años de experiencia, Adil Brkovic ha liderado hitos judiciales que transformaron la jurisprudencia en Chile. Su enfoque combina rigor técnico con un profundo compromiso social.'
						buttonText='Ver Trayectoria Completa'
						buttonLink='/trayectoria'
						imageSide='right'
					/>
				</div>
			</section>

			{/* COMPONENTE DE LLAMADO A LA ACCIÓN (WhatsApp) */}
			<WhatsAppCTA />
		</div>
	);
};

export default Home;
