import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { testimonials } from '@/content/pages/testimonials'
import { TestimonialCard } from '@/components/testimonial-card'

export default function Page() {
  return (
    <>
      <PageHero title="Testimonials" subtitle="Real stories from families" />
      <Section className="mx-auto grid max-w-3xl gap-6">
        {testimonials.map((t) => (
          <TestimonialCard key={t.author} quote={t.quote} author={t.author} />
        ))}
      </Section>
    </>
  )
}
