import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Prose } from '@/components/prose'
import { ResourceCard } from '@/components/resource-card'
import { CTABand } from '@/components/cta-band'
import { siteConfig } from '@/lib/siteConfig'
import { generateMetadata as generatePageMetadata } from '@/lib/utils'

export const metadata: Metadata = generatePageMetadata({
  title: 'Resources',
  description: 'Helpful guides you can use today.',
})

export default function ResourcesPage() {
  return (
    <div className="py-12">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Resources' }]} />
        
        <div className="max-w-6xl mx-auto">
          <Prose>
            <h1>Resources</h1>
            <p className="text-xl text-muted-foreground">
              Helpful guides you can use today.
            </p>
          </Prose>

          <div className="my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {siteConfig.resources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  title={resource.title}
                  description={resource.description}
                  type={resource.type}
                  href={resource.href}
                />
              ))}
            </div>
          </div>

          <CTABand
            title="Explore the resource library"
            description="Find more guides, templates, and helpful resources for your family."
            primaryAction={{
              text: 'View All Resources',
              href: '/contact',
            }}
          />
        </div>
      </div>
    </div>
  )
}
