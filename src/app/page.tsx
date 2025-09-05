import { Hero } from '@/components/hero'
import { TestimonialCarousel } from '@/components/testimonial-carousel'
import { ServiceCard } from '@/components/service-card'
import { CTABand } from '@/components/cta-band'
import { siteConfig } from '@/lib/siteConfig'
import { MessageCircle, Home, GraduationCap, Heart } from 'lucide-react'

const icons = {
  MessageCircle,
  Home,
  GraduationCap,
  Heart,
}

export default function HomePage() {
  return (
    <>
      <Hero />
      
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">How we help</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Our services are designed for daily life. We practice where skills are used, not only in a clinic.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {siteConfig.services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={icons[service.icon as keyof typeof icons]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container">
          <TestimonialCarousel />
        </div>
      </section>

      <CTABand
        title="Ready to get started?"
        description="Book a free intro call to learn how we can help your family."
        primaryAction={{
          text: 'Book Free Call',
          href: '/contact',
        }}
        secondaryAction={{
          text: 'Learn More',
          href: '/approach',
        }}
      />
    </>
  )
}
