import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  childAge: z.string(),
  preferredMethod: z.string(),
  goals: z.string().min(1),
  referral: z.string().optional(),
  consent: z.literal(true),
  honeypot: z.string().max(0).optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>
