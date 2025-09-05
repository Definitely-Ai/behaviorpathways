import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Prose } from '@/components/prose'
import { ContactForm } from '@/components/form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { siteConfig } from '@/lib/siteConfig'
import { generateMetadata as generatePageMetadata } from '@/lib/utils'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact',
  description: 'Tell us a little about your family and what you are hoping for. We will get back to you within two business days.',
})

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Contact' }]} />
        
        <div className="max-w-4xl mx-auto">
          <Prose>
            <h1>Contact</h1>
            <p className="text-xl text-muted-foreground">
              Tell us a little about your family and what you are hoping for. We will get back to you within two business days.
            </p>
          </Prose>

          <div className="my-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Direct Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href={`mailto:${siteConfig.links.email}`}
                        className="text-primary hover:underline"
                      >
                        {siteConfig.links.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href={`tel:${siteConfig.links.phone}`}
                        className="text-primary hover:underline"
                      >
                        {siteConfig.links.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Service Area</p>
                      <p className="text-muted-foreground">Local families and communities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-muted-foreground">Within 2 business days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>We are honored to hear your story</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every family's journey is unique. We're here to listen, understand, and provide the support that works best for your child and your family.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
