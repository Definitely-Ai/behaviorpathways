import nodemailer from 'nodemailer'
import { Resend } from 'resend'

export async function sendEmail(subject: string, text: string) {
  const to = process.env.CONTACT_TO_EMAIL
  if (!to) throw new Error('CONTACT_TO_EMAIL not set')

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({ from: to, to, subject, text })
    return
  }
  if (process.env.SMTP_HOST) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      text,
    })
  }
}
