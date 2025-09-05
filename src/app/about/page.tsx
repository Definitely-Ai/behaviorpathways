import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Prose } from '@/components/prose'
import { ProviderCard } from '@/components/provider-card'
import { CTABand } from '@/components/cta-band'
import { generateMetadata as generatePageMetadata } from '@/lib/utils'

export const metadata: Metadata = generatePageMetadata({
  title: 'About',
  description: 'Meet Valentina and learn about our commitment to communication-first ABA services.',
})

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container">
        <Breadcrumbs items={[{ label: 'About' }]} />
        
        <div className="max-w-4xl mx-auto">
          <Prose>
            <h1>Meet Valentina</h1>
            <p className="text-xl text-muted-foreground">
              Valentina is an experienced ABA provider who believes communication is the foundation for growth. Families describe her as patient, joyful, and steady. She partners closely with caregivers and schools so children can practice skills across their day.
            </p>
          </Prose>

          <div className="my-16">
            <ProviderCard
              name="Valentina"
              title="Board Certified Behavior Analyst (BCBA)"
              bio="With over 10 years of experience in Applied Behavior Analysis, Valentina specializes in communication skill development and parent training. She believes that every child has the potential to communicate effectively when given the right support and strategies."
              credentials={[
                'Board Certified Behavior Analyst (BCBA)',
                'Licensed Behavior Analyst',
                'Master&apos;s in Applied Behavior Analysis',
                '10+ years experience'
              ]}
              email="hello@behaviorpathways.com"
              phone="(555) 123-4567"
              serviceArea="Serving families throughout the local area"
            />
          </div>

          <div className="my-16 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Service areas</h2>
              <p className="text-muted-foreground">
                We serve families in the surrounding area. Reach out to see if we can come to your home, school, or community program.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Our commitment</h2>
              <p className="text-muted-foreground">
                We respect every family&apos;s culture and language. We listen first and tailor support to you.
              </p>
            </div>
          </div>

          <CTABand
            title="Start a conversation"
            description="Ready to learn more about how we can help your family? Contact us today."
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
