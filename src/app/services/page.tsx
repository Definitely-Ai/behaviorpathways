import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Prose } from '@/components/prose'
import { ServiceCard } from '@/components/service-card'
import { CTABand } from '@/components/cta-band'
import { siteConfig } from '@/lib/siteConfig'
import { MessageCircle, Home, GraduationCap, Heart } from 'lucide-react'
import { generateMetadata as generatePageMetadata } from '@/lib/utils'

const icons = {
  MessageCircle,
  Home,
  GraduationCap,
  Heart,
}

export const metadata: Metadata = generatePageMetadata({
  title: 'Services',
  description: 'Our services are designed for daily life. We practice where skills are used, not only in a clinic.',
})

export default function ServicesPage() {
  return (
    <div className="py-12">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Services' }]} />
        
        <div className="max-w-4xl mx-auto">
          <Prose>
            <h1>Services</h1>
            <p className="text-xl text-muted-foreground">
              Our services are designed for daily life. We practice where skills are used, not only in a clinic.
            </p>
          </Prose>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            {siteConfig.services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={icons[service.icon as keyof typeof icons]}
              />
            ))}
          </div>

          <CTABand
            title="See if we serve your area"
            description="Contact us to learn more about our services and schedule a free consultation."
            primaryAction={{
              text: 'Contact Us',
              href: '/contact',
            }}
          />
        </div>
      </div>
    </div>
  )
}
