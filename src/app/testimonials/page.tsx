import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Prose } from '@/components/prose'
import { TestimonialCarousel } from '@/components/testimonial-carousel'
import { CTABand } from '@/components/cta-band'
import { generateMetadata as generatePageMetadata } from '@/lib/utils'
import { generateFAQSchema } from '@/lib/schema'

export const metadata: Metadata = generatePageMetadata({
  title: 'Testimonials',
  description: 'Real stories from families who chose a communication first path.',
})

export default function TestimonialsPage() {
  const faqSchema = generateFAQSchema([
    {
      question: 'What do families say about Behavior Pathways?',
      answer: 'Families consistently report significant improvements in communication skills, reduced challenging behaviors, and increased confidence in supporting their children at home and in the community.',
    },
  ])

  return (
    <div className="py-12">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Testimonials' }]} />
        
        <div className="max-w-6xl mx-auto">
          <Prose>
            <h1>Testimonials</h1>
            <p className="text-xl text-muted-foreground">
              Real stories from families who chose a communication first path.
            </p>
          </Prose>

          <div className="my-16">
            <TestimonialCarousel />
          </div>

          <CTABand
            title="See how we work"
            description="Ready to learn more about our approach? Contact us for a free consultation."
            primaryAction={{
              text: 'Contact Us',
              href: '/contact',
            }}
          />

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqSchema),
            }}
          />
        </div>
      </div>
    </div>
  )
}
