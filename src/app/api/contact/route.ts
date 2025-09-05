import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import fs from 'fs'
import path from 'path'

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

interface ContactFormData {
  name: string
  email: string
  phone: string
  location: string
  contactMethod: string
  message: string
  consent: boolean
  honeypot: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Honeypot check
    if (data.honeypot) {
      return NextResponse.json({ success: true })
    }

    // Validation
    if (!data.name || !data.email || !data.message || !data.consent) {
      return NextResponse.json(
        {
          error:
            'Please fill in all required fields and agree to the privacy policy.',
        },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    const contactData = {
      name: data.name,
      email: data.email,
      phone: data.phone || 'Not provided',
      location: data.location || 'Not provided',
      contactMethod: data.contactMethod,
      message: data.message,
      timestamp: new Date().toISOString(),
    }

    // Try to send email if API key is available
    if (
      resend &&
      process.env.RESEND_API_KEY &&
      process.env.CONTACT_TO_ADDRESS
    ) {
      try {
        await resend.emails.send({
          from: 'Behavior Pathways <noreply@behaviorpathways.com>',
          to: [process.env.CONTACT_TO_ADDRESS],
          subject: `New Contact Form Submission from ${data.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
            <p><strong>Location:</strong> ${data.location || 'Not provided'}</p>
            <p><strong>Preferred Contact Method:</strong> ${data.contactMethod}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message.replace(/\n/g, '<br>')}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          `,
        })
      } catch (emailError) {
        console.error('Email sending failed:', emailError)
        // Fall through to file storage
      }
    }

    // Store in file for local development or as backup
    if (process.env.NODE_ENV === 'development') {
      const filePath = path.join(process.cwd(), 'contact-submissions.json')
      let submissions = []

      try {
        if (fs.existsSync(filePath)) {
          const fileContent = fs.readFileSync(filePath, 'utf8')
          submissions = JSON.parse(fileContent)
        }
      } catch (error) {
        console.error('Error reading submissions file:', error)
      }

      submissions.push(contactData)

      try {
        fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2))
      } catch (error) {
        console.error('Error writing submissions file:', error)
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
