import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Prose } from '@/components/prose'
import { CTABand } from '@/components/cta-band'
import { siteConfig } from '@/lib/siteConfig'
import { generateMetadata as generatePageMetadata } from '@/lib/utils'
import { MapPin, Clock, Car } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title:
    'ABA Therapy Service Areas - Naples, Fort Myers, Bonita Springs, Collier & Lee Counties',
  description:
    'Behavior Pathways provides in-home ABA therapy services throughout Naples, Fort Myers, Bonita Springs, Estero, Marco Island, and all of Collier & Lee Counties, Florida.',
})

const serviceAreas = [
  {
    name: 'Naples',
    description:
      'Full ABA therapy services including in-home sessions, school collaboration, and community-based support.',
    features: ['Downtown Naples', 'North Naples', 'East Naples', 'Golden Gate'],
    travelTime: '0-15 minutes',
  },
  {
    name: 'Fort Myers',
    description:
      'Comprehensive autism therapy services in Fort Myers with flexible scheduling and community support.',
    features: [
      'Downtown Fort Myers',
      'Gateway',
      'Colonial Boulevard',
      'Cypress Lake',
    ],
    travelTime: '20-30 minutes',
  },
  {
    name: 'Bonita Springs & Estero',
    description:
      "Comprehensive autism therapy services with flexible scheduling to fit your family's needs.",
    features: ['Bonita Springs', 'Estero', 'San Carlos Park', 'Coconut Point'],
    travelTime: '15-25 minutes',
  },
  {
    name: 'Marco Island',
    description:
      'Specialized ABA services for families living on Marco Island with convenient scheduling.',
    features: ['Marco Island', 'Goodland'],
    travelTime: '25-35 minutes',
  },
  {
    name: 'Cape Coral',
    description:
      'ABA therapy services throughout Cape Coral with convenient scheduling and local expertise.',
    features: ['Cape Coral', 'Burnt Store', 'Pine Island'],
    travelTime: '25-35 minutes',
  },
  {
    name: 'Collier & Lee Counties',
    description:
      'We serve all areas of Collier and Lee Counties including rural communities and smaller towns.',
    features: [
      'Immokalee',
      'Ave Maria',
      'Lehigh Acres',
      'Sanibel',
      'Captiva',
      'Fort Myers Beach',
    ],
    travelTime: '30-45 minutes',
  },
]

export default function ServiceAreasPage() {
  return (
    <div className="py-12">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Service Areas' }]} />

        <div className="mx-auto max-w-6xl">
          <Prose>
            <h1>ABA Therapy Service Areas</h1>
            <p className="text-xl text-muted-foreground">
              We provide comprehensive ABA therapy services throughout Naples,
              Fort Myers, Bonita Springs, Estero, Marco Island, and all of
              Collier & Lee Counties, Florida.
            </p>
          </Prose>

          <div className="my-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {serviceAreas.map((area, index) => (
              <div key={index} className="glass-card rounded-xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold text-foreground">
                      {area.name}
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                      {area.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold text-foreground">
                        Areas We Serve:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {area.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Car className="h-4 w-4" />
                      <span>Travel time: {area.travelTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card my-16 rounded-xl p-8">
            <div className="text-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Why Choose Local ABA Therapy?
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Flexible Scheduling
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We work around your family&apos;s schedule and can
                    accommodate school hours, after-school activities, and
                    weekend sessions.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Convenient Locations
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    In-home therapy means no travel time for your family. We
                    come to you wherever you are in Collier County.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Car className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Local Knowledge
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We understand the local community, schools, and resources
                    available to families in Naples and surrounding areas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <CTABand
            title="Ready to get started?"
            description="Contact us to learn more about our ABA therapy services throughout Naples, Fort Myers, Bonita Springs, Estero, Marco Island, and Collier & Lee Counties. Schedule a free consultation today."
            primaryAction={{
              text: 'Contact Us',
              href: '/contact',
            }}
            secondaryAction={{
              text: 'Learn About Our Approach',
              href: '/approach',
            }}
          />
        </div>
      </div>
    </div>
  )
}
