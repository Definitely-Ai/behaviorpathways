'use server'

import { contactSchema } from '@/lib/validation'
import { sendEmail } from '@/lib/email'

export async function submitContact(_prev: any, formData: FormData) {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    childAge: formData.get('childAge'),
    preferredMethod: formData.get('preferredMethod'),
    goals: formData.get('goals'),
    referral: formData.get('referral'),
    consent: formData.get('consent') === 'on',
    honeypot: formData.get('middleName'),
  }

  const parsed = contactSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors }
  }

  const { name, email, phone, childAge, preferredMethod, goals, referral } =
    parsed.data
  const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nChild Age: ${childAge}\nPreferred Method: ${preferredMethod}\nGoals: ${goals}\nReferral: ${referral}`
  await sendEmail('New contact request', text)
  return { success: true }
}
