import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Newspaper } from 'lucide-react';
import { PressItem } from '../components/PressItem';
import { noticias } from '../data/prensa';
import CTASection from '../components/CTASection'; // Importamos el componente modular

const ServicioTemplate = () => {
	const { id } = useParams();

	const contenidos = {
		'reparacion-ddhh': {
			titulo: 'Reparación y Derechos Humanos',
			subtitulo: 'Justicia civil y reparaciones económicas para víctimas históricas.',
			descripcion:
				'Representamos judicialmente desde hace más tres décadas a víctimas de graves violaciones a los derechos humanos cometidas principalmente durante la dictadura militar (1973-1990) sus familias y organizaciones...',
			puntos: ['Víctimas directas prisión política y tortura (Valech)', 'Cónyuges e hijos de víctimas Valech', 'Pago retroactivo PGU', 'Violaciones a los DD.HH.'],
		},
		'defensa-comunidades': {
			titulo: 'Defensa de Comunidades',
			subtitulo: 'Litigación estratégica frente a daños socioambientales y colectivos.',
			descripcion:
				'Representamos judicialmente a grupos humanos que se ven vulnerados en su derecho a vivir en un medioambiente libre de contaminación o afectados por proyectos mineros, sanitarios o inmobiliarios.',
			puntos: ['Daños ambientales', 'Protección salud pública', 'Afectaciones entorno social', 'Litigación estratégica'],
		},
		'litigios-indemnizatorios': {
			titulo: 'Litigios Indemnizatorios',
			subtitulo: 'Especialistas en obtener justicia frente a negligencias y accidentes.',
			descripcion:
				'Representación judicial en todo tipo de litigios indemnizatorios ya sea en materia civil, penal, laboral o administrativa, tales como Accidentes en el trabajo, tránsito, aéreos y negligencias médicas.',
			puntos: ['Accidentes de trabajo', 'Fallas de construcción', 'Negligencia médica', 'Protección de datos'],
		},
		'defensa-administrativa': {
			titulo: 'Defensa Administrativa',
			subtitulo: 'Resguardo frente al poder sancionador del Estado y sumarios.',
			descripcion:
				'Representación y defensa jurídica en sumarios administrativos contra funcionarios públicos y en procesos sancionatorios seguidos en contra de empresas reguladas.',
			puntos: ['Sumarios administrativos', 'Recursos de protección', 'Procesos sancionatorios', 'Defensa ante el Estado'],
		},
		'justicia-previsional': {
			titulo: 'Justicia Previsional y PGU',
			subtitulo: 'Gestión de pensiones y derechos de seguridad social ante el IPS.',
			descripcion:
				'Representamos judicialmente a personas beneficiarias de la Ley Valech y Exonerados Políticos a quienes el Estado les ha denegado la PGU, buscando el pago retroactivo desde 2022.',
			puntos: ['Regularización de PGU', 'Gestión pagos retroactivos', 'Reclamos ante el IPS', 'Asesoría compatibilidad'],
		},
	};

	const data = contenidos[id];
	const noticiasRelacionadas = noticias.filter((n) => n.tag === id);

	if (!data) {
		return <div className='pt-40 text-center font-display text-[#2c3e50] uppercase'>Servicio no encontrado</div>;
	}

	return (
		<div className='pt-40 pb-20 min-h-screen bg-[#F4F7F6] font-sans'>
			<div className='max-w-6xl mx-auto px-6'>
				{/* Botón Volver */}
				<Link to='/#areas' className='inline-flex items-center text-[#e67e22] font-bold text-xs uppercase tracking-widest mb-12 hover:text-[#2c3e50] transition-colors'>
					<ArrowLeft size={16} className='mr-2' /> Volver a Áreas de Trabajo
				</Link>

				<div className='grid md:grid-cols-3 gap-16'>
					{/* COLUMNA IZQUIERDA: CONTENIDO Y PRENSA */}
					<div className='md:col-span-2 space-y-12'>
						<section>
							<h1 className='text-4xl md:text-5xl font-display font-semibold text-[#2c3e50] leading-none tracking-tighter uppercase mb-6'>{data.titulo}</h1>
							<p className='text-[#e67e22] font-semibold text-xl mb-8 italic font-display'>{data.subtitulo}</p>
							<div className='text-[#778696] font-light text-lg leading-relaxed'>
								<p>{data.descripcion}</p>
							</div>
						</section>

						{/* PRENSA RELACIONADA */}
						{noticiasRelacionadas.length > 0 && (
							<div className='pt-12 border-t border-gray-200'>
								<div className='flex items-center gap-3 mb-8'>
									<Newspaper size={20} className='text-[#e67e22]' />
									<h2 className='font-display font-semibold text-[#2c3e50] uppercase tracking-widest text-sm'>Casos en la Prensa Relacionados</h2>
								</div>
								<div className='bg-white shadow-sm divide-y divide-gray-100 rounded-sm overflow-hidden'>
									{noticiasRelacionadas.map((noticia) => (
										<PressItem key={noticia.id} noticia={noticia} />
									))}
								</div>
							</div>
						)}
					</div>
				</div>

				{/* CTA DE CIERRE (FULL WIDTH) - Solo aparece si el usuario llegó al final */}
				<div className='mt-12'>
					<CTASection variant='full' />
				</div>
			</div>
		</div>
	);
};

export default ServicioTemplate;
