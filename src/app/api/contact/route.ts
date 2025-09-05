import { NextRequest, NextResponse } from 'next/server'

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

    // Log the submission (in production, you'd want to store this in a database)
    console.log('New contact form submission:', {
      name: data.name,
      email: data.email,
      phone: data.phone || 'Not provided',
      location: data.location || 'Not provided',
      contactMethod: data.contactMethod,
      message: data.message,
      timestamp: new Date().toISOString(),
    })

    // In a real implementation, you would:
    // 1. Store the submission in a database
    // 2. Send an email notification
    // 3. Send an auto-reply to the user
    
    // For now, we'll just return success
    return NextResponse.json({ 
      success: true,
      message: 'Thank you for your message! We will get back to you within 2 business days.'
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
