'use client'

import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, CheckCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  location: string
  contactMethod: string
  message: string
  consent: boolean
  honeypot: string
}

export function ContactForm() {
  const [state, handleSubmit] = useForm('mnnbjkyo')
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    location: '',
    contactMethod: 'email',
    message: '',
    consent: false,
    honeypot: '',
  })
  const [error, setError] = useState('')

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot check
    if (formData.honeypot) {
      return
    }

    if (!formData.consent) {
      setError('Please agree to the privacy policy to continue.')
      return
    }

    setError('')
    handleSubmit(e)
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  if (state.succeeded) {
    return (
      <Card className="mx-auto max-w-2xl">
        <CardContent className="p-8 text-center">
          <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
          <h2 className="mb-2 text-2xl font-bold">Thank you!</h2>
          <p className="text-muted-foreground">
            We&apos;ve received your message and will get back to you within two
            business days.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>
        <CardTitle>Get in touch</CardTitle>
        <p className="text-muted-foreground">
          Tell us about your family and how we can help. We&apos;ll respond
          within two business days.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          {/* Honeypot field - hidden from users */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">City and State</Label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City, State"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactMethod">Preferred contact method</Label>
            <select
              id="contactMethod"
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="text">Text message</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">How can we help? *</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your child and what you're hoping for..."
              rows={4}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            <Label htmlFor="consent" className="text-sm leading-relaxed">
              I agree to the{' '}
              <a href="/privacy" className="text-primary hover:underline">
                privacy policy
              </a>{' '}
              and consent to being contacted about services. *
            </Label>
          </div>

          {error && (
            <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
              {error}
            </div>
          )}

          <Button type="submit" className="w-full" disabled={state.submitting}>
            {state.submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
