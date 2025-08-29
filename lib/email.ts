import nodemailer from 'nodemailer'
import { Resend } from 'resend'
import { site } from '@/content/site'

export async function sendEmail(subject: string, text: string) {
  const to = process.env.CONTACT_TO_EMAIL || site.contact.email
  if (!to) {
    console.warn('Contact email not configured; skipping send')
    return
  }

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
