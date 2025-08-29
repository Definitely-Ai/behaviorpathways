import { describe, it, expect } from 'vitest'
import { contactSchema } from '@/lib/validation'

describe('contactSchema', () => {
  it('validates proper data', () => {
    const data = {
      name: 'Parent',
      email: 'test@example.com',
      phone: '',
      childAge: '5',
      preferredMethod: 'email',
      goals: 'speech',
      referral: '',
      consent: true,
      honeypot: '',
    }
    expect(contactSchema.parse(data)).toEqual(data)
  })

  it('rejects missing consent', () => {
    const data = {
      name: 'Parent',
      email: 'test@example.com',
      childAge: '5',
      preferredMethod: 'email',
      goals: 'speech',
      consent: false,
    } as any
    expect(() => contactSchema.parse(data)).toThrow()
  })
})
