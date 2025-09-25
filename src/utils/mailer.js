import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

/**
 * Envía un correo electrónico
 * @param {string} to - El destinatario.
 * @param {string} subject - El asunto.
 * @param {string} html - El cuerpo en formato HTML.
 */
export const sendEmail = async (to, subject, html) => {
    try {
        await transporter.sendMail({
            from: `Tu Ecommerce <${process.env.MAIL_USER}>`,
            to,
            subject,
            html
        });
        console.log(`Correo enviado a ${to}`);
    } catch (error) {
        console.error(`Error al enviar correo a ${to}:`, error);
    }
};