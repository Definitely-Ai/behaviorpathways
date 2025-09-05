import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Prose } from '@/components/prose'
import { CTABand } from '@/components/cta-band'
import { siteConfig } from '@/lib/siteConfig'
import { generateMetadata as generatePageMetadata } from '@/lib/utils'

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Approach',
  description: 'We keep the process simple and transparent.',
})

export default function ApproachPage() {
  return (
    <div className="py-12">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Our Approach' }]} />
        
        <div className="max-w-4xl mx-auto">
          <Prose>
            <h1>Our Approach</h1>
            <p className="text-xl text-muted-foreground">
              We keep the process simple and transparent.
            </p>
          </Prose>

          <div className="my-16 space-y-12">
            {siteConfig.approach.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <CTABand
            title="Ready to get started?"
            description="Book a free intro call to learn more about our approach."
            primaryAction={{
              text: 'Book Free Call',
              href: '/contact',
            }}
          />
        </div>
      </div>
    </div>
  )
}
