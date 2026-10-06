import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializa Resend con tu API Key (asegúrate de tenerla en tu archivo .env)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const body = await req.json();
        const { nombre, email, telefono, area, intencion, mensaje } = body;

        // Formateo del texto para que el correo se lea profesional
        const intencionTexto =
            intencion === 'demandar'
                ? 'Iniciar / Evaluar Demanda'
                : intencion === 'notificado'
                    ? 'Notificado / Defensa Judicial'
                    : intencion === 'empresa'
                        ? 'Represento a una Empresa, Asociación o Comunidad'
                        : intencion;

        // ENVÍO REAL A LA BANDEJA DEL ESTUDIO
        await resend.emails.send({
            from: 'Web Estudio Brkovic <contacto@estudiobrkovic.cl>', // Debe ser tu dominio verificado en Resend
            to: ['estudiobrkovic@gmail.com'], // Correo real donde recibirán los leads
            subject: `Nuevo Caso Web (${area}): ${nombre}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; padding: 24px; border-radius: 6px;">
          <h2 style="color: #2c3e50; border-bottom: 2px solid #e67e22; padding-bottom: 8px; margin-top: 0;">Nueva Solicitud de Evaluación de Caso</h2>
          <p style="margin: 8px 0;"><strong>Nombre Completo:</strong> ${nombre}</p>
          <p style="margin: 8px 0;"><strong>Correo Electrónico:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 8px 0;"><strong>Teléfono / WhatsApp:</strong> ${telefono}</p>
          <p style="margin: 8px 0;"><strong>Área de Interés:</strong> ${area}</p>
          <p style="margin: 8px 0;"><strong>Situación u Intención:</strong> ${intencionTexto}</p>
          
          <div style="background-color: #f8fafc; padding: 16px; border-left: 4px solid #e67e22; margin-top: 16px; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold; color: #475569; font-size: 13px; text-transform: uppercase;">Resumen del Caso:</p>
            <p style="margin-top: 8px; color: #1e293b; white-space: pre-line; line-height: 1.5;">${mensaje}</p>
          </div>
        </div>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error enviando formulario:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}