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
          <div className="mb-12 space-y-4 text-center md:mb-16">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              How we help
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Our ABA therapy services in Naples, Fort Myers, Bonita Springs,
              Estero, Marco Island, and throughout Collier & Lee Counties are
              designed for daily life. We practice where skills are used, not
              only in a clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
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

      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container">
          <TestimonialCarousel />
        </div>
      </section>

      <CTABand
        title="Ready to get started?"
        description="Book a free intro call to learn how we can help your family in Naples, Fort Myers, Bonita Springs, Estero, Marco Island, or anywhere in Collier & Lee Counties."
        primaryAction={{
          text: 'Book Free Call',
          href: '/contact',
        }}
        secondaryAction={{
          text: 'View Service Areas',
          href: '/service-areas',
        }}
      />
    </>
  )
}
