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

        <div className="mx-auto max-w-4xl">
          <Prose>
            <h1>Our Approach</h1>
            <p className="text-xl text-muted-foreground">
              We keep the process simple and transparent.
            </p>
          </Prose>

          <div className="my-16 space-y-12">
            {siteConfig.approach.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
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
