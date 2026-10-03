'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle2, AlertCircle, MessageCircle, Lock } from 'lucide-react';
import { WHATSAPP_URL } from '@/constants/contact';

export const ContactForm = ({ defaultArea = '', title = 'Evaluación Preliminar de Caso' }) => {
	const formRef = useRef();
	const [loading, setLoading] = useState(false);
	const [submittedStatus, setSubmittedStatus] = useState(null); // 'qualified' | 'unqualified' | 'error'

	// 1. Campo Trampa (Honeypot para bots) dentro del componente
	const [honeypot, setHoneypot] = useState('');

	const [formData, setFormData] = useState({
		nombre: '',
		email: '',
		telefono: '',
		area: defaultArea || 'litigios-indemnizatorios',
		intencion: 'demandar',
		mensaje: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// 2. Filtro Honeypot: Si el campo trampa tiene texto, es un bot
		if (honeypot !== '') {
			setSubmittedStatus('qualified'); // Simulamos éxito para engañar al bot sin enviar correo
			return;
		}

		setLoading(true);

		// 3. FILTRO DE CUALIFICACIÓN: Intercepta si el usuario busca orientación gratuita
		if (formData.intencion === 'orientacion_gratuita') {
			setLoading(false);
			setSubmittedStatus('unqualified');
			return;
		}

		// 4. ENVÍA EMAILJS SOLO PARA CASOS CUALIFICADOS
		try {
			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				{
					from_name: formData.nombre,
					from_email: formData.email,
					phone: formData.telefono,
					area_practica: formData.area,
					intencion: formData.intencion === 'demandar' ? 'Iniciar/Evaluar Demanda' : 'Notificado/Defensa Judicial',
					message: formData.mensaje,
				},
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
			);

			setSubmittedStatus('qualified');
		} catch (error) {
			console.error('Error enviando formulario:', error);
			setSubmittedStatus('error');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='bg-white p-8 md:p-12 shadow-xl border-t-4 border-[#e67e22] text-[#2c3e50] my-12'>
			<div className='mb-8'>
				<span className='text-[#e67e22] font-bold uppercase tracking-[0.3em] text-[10px] block mb-2'>Litigios de Alta Complejidad</span>
				<h3 className='text-2xl md:text-3xl font-display font-semibold uppercase tracking-tight'>{title}</h3>
			</div>

			{submittedStatus === 'qualified' && (
				<div className='bg-emerald-50 border border-emerald-200 p-6 rounded-sm space-y-4'>
					<div className='flex items-center gap-3 text-emerald-800 font-bold'>
						<CheckCircle2 size={24} className='text-emerald-600 shrink-0' />
						<h4 className='leading-snug'>Solicitud Recibida Correctamente</h4>
					</div>
					<p className='text-sm text-emerald-700 leading-relaxed font-light'>
						Hemos recibido los antecedentes de su caso. Un profesional de nuestro equipo evaluará la viabilidad técnica y lo contactará a la brevedad.
					</p>
					<div className='pt-2'>
						<a
							href={WHATSAPP_URL}
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center justify-center gap-2 bg-[#2e7d32] text-white px-5 py-3 text-xs font-bold uppercase tracking-wider hover:bg-emerald-800 transition-colors w-full sm:w-auto text-center cursor-pointer'>
							<MessageCircle size={16} className='shrink-0' />
							<span>Enviar complemento por WhatsApp</span>
						</a>
					</div>
				</div>
			)}

			{submittedStatus === 'unqualified' && (
				<div className='bg-amber-50 border border-amber-200 p-6 rounded-sm space-y-3'>
					<div className='flex items-center gap-3 text-amber-900 font-bold'>
						<AlertCircle size={24} className='text-amber-600 shrink-0' />
						<h4 className='leading-snug'>Información sobre nuestro Alcance de Servicios</h4>
					</div>
					<p className='text-sm text-amber-800 leading-relaxed font-light'>
						Estudio Jurídico Brkovic se enfoca exclusivamente en la representación de litigios de alta complejidad, defensas corporativas e indemnizaciones judiciales. No prestamos
						servicios de orientación legal gratuita ni tramitación de causas comunes o de familia.
					</p>
					<p className='text-xs text-amber-700 italic font-light'>
						Para consultas de orientación general, le sugerimos acudir a las Corporaciones de Asistencia Judicial (CAJ) o a la Fundación Pro Bono.
					</p>
				</div>
			)}

			{submittedStatus === 'error' && (
				<div className='bg-red-50 border border-red-200 p-4 text-red-700 text-sm mb-6'>
					Ocurrió un error al enviar el formulario. Por favor, intente de nuevo o contáctenos directamente vía WhatsApp.
				</div>
			)}

			{!submittedStatus && (
				<form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div>
							<label className='block text-[11px] font-bold uppercase tracking-wider mb-2 text-[#778696]'>Nombre Completo *</label>
							<input
								type='text'
								name='nombre'
								required
								value={formData.nombre}
								onChange={handleChange}
								className='w-full p-3 bg-[#f4f7f6] border border-gray-200 text-sm focus:outline-none focus:border-[#e67e22]'
								placeholder='Ej. Juan Pérez'
							/>
						</div>

						<div>
							<label className='block text-[11px] font-bold uppercase tracking-wider mb-2 text-[#778696]'>Teléfono / WhatsApp *</label>
							<input
								type='tel'
								name='telefono'
								required
								value={formData.telefono}
								onChange={handleChange}
								className='w-full p-3 bg-[#f4f7f6] border border-gray-200 text-sm focus:outline-none focus:border-[#e67e22]'
								placeholder='+56 9 1234 5678'
							/>
						</div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div>
							<label className='block text-[11px] font-bold uppercase tracking-wider mb-2 text-[#778696]'>Correo Electrónico *</label>
							<input
								type='email'
								name='email'
								required
								value={formData.email}
								onChange={handleChange}
								className='w-full p-3 bg-[#f4f7f6] border border-gray-200 text-sm focus:outline-none focus:border-[#e67e22]'
								placeholder='correo@ejemplo.cl'
							/>
						</div>

						<div>
							<div className='flex items-center justify-between mb-2'>
								<label className='block text-[11px] font-bold uppercase tracking-wider text-[#778696]'>Área de Interés *</label>
								{!!defaultArea && (
									<span className='inline-flex items-center gap-1 text-[10px] text-[#e67e22] font-bold uppercase tracking-wider bg-[#e67e22]/10 px-2 py-0.5 rounded-xs'>
										<Lock size={10} className='shrink-0' />
										Área Fijada
									</span>
								)}
							</div>
							<select
								name='area'
								value={formData.area}
								onChange={handleChange}
								disabled={!!defaultArea}
								className='w-full p-3 text-sm focus:outline-none transition-colors bg-[#f4f7f6] border border-gray-200 focus:border-[#e67e22] cursor-pointer disabled:bg-gray-200/80 disabled:border-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed disabled:opacity-100 disabled:font-medium'>
								<option value='litigios-indemnizatorios'>Litigios Indemnizatorios</option>
								<option value='reparacion-ddhh'>Justicia y DD.HH.</option>
								<option value='defensa-comunidades'>Defensa de Comunidades</option>
								<option value='defensa-administrativa'>Defensa Administrativa</option>
								<option value='justicia-previsional'>Justicia Previsional (PGU / Ley Valech)</option>
								<option value='practica-tributaria'>Práctica Tributaria</option>
							</select>
						</div>
					</div>

					<div>
						<label className='block text-[11px] font-bold uppercase tracking-wider mb-2 text-[#778696]'>¿Cuál es la situación actual o intención principal? *</label>
						<select
							name='intencion'
							value={formData.intencion}
							onChange={handleChange}
							className='w-full p-3 bg-[#f4f7f6] border border-gray-200 text-sm font-medium focus:outline-none focus:border-[#e67e22] cursor-pointer'>
							<option value='demandar'>Deseo evaluar o iniciar una demanda judicial / acción legal</option>
							<option value='notificado'>Fui notificado/a de una demanda o procedimiento en curso</option>
							<option value='orientacion_gratuita'>Solo busco orientación general o consulta informativa gratuita</option>
						</select>
					</div>

					<div>
						<label className='block text-[11px] font-bold uppercase tracking-wider mb-2 text-[#778696]'>Resumen Breve del Caso *</label>
						<textarea
							name='mensaje'
							rows={4}
							required
							maxLength={600}
							value={formData.mensaje}
							onChange={handleChange}
							className='w-full p-3 bg-[#f4f7f6] border border-gray-200 text-sm focus:outline-none focus:border-[#e67e22]'
							placeholder='Describa brevemente los hechos clave y pretensión económica o judicial...'
						/>
					</div>

					<div className='pt-2'>
						<button
							type='submit'
							disabled={loading}
							className='btn-primary w-full !flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50'>
							<span className='leading-none'>{loading ? 'Procesando...' : 'Enviar para Evaluación de Caso'}</span>
							{!loading && <Send size={16} className='shrink-0' />}
						</button>
					</div>

					{/* Campo trampa Honeypot (Oculto) */}
					<div className='hidden' aria-hidden='true' style={{ display: 'none' }}>
						<input type='text' name='website_hp' tabIndex='-1' value={honeypot} onChange={(e) => setHoneypot(e.target.value)} autoComplete='off' />
					</div>

					<p className='text-[10px] text-[#778696] italic text-center font-light leading-relaxed'>
						* Estudio Jurídico Brkovic garantiza confidencialidad profesional bajo la legislación chilena vigente.
					</p>
				</form>
			)}
		</div>
	);
};
