import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { testimonials } from '@/content/pages/testimonials'
import { TestimonialCard } from '@/components/testimonial-card'

export default function Page() {
  return (
    <>
      <PageHero title="Testimonials" subtitle="Real stories from families" />
      <Section containerClass="max-w-3xl">
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.author}
              quote={t.quote}
              author={t.author}
              className="animate-fade-in motion-safe:transition-transform motion-safe:hover:scale-105"
              style={{ animationDelay: `${i * 120}ms` }}
            />
          ))}
        </div>
      </Section>
    </>
  )
}
