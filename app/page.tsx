import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { TestimonialCard } from '@/components/testimonial-card'
import { home } from '@/content/pages/home'

export default function Page() {
  return (
    <>
      <PageHero title={home.hero.heading} subtitle={home.hero.subheading}>
        <Link
          href="/contact"
          className="rounded bg-bp-primary px-4 py-2 text-black"
        >
          {home.hero.primaryCta}
        </Link>
        <Link href="/approach" className="rounded border px-4 py-2">
          {home.hero.secondaryCta}
        </Link>
      </PageHero>
      <Section className="text-center">
        <div className="mb-6 flex flex-wrap justify-center gap-4">
          {home.hero.trust.map((t) => (
            <span key={t} className="rounded bg-bp-surface px-3 py-1 text-sm">
              {t}
            </span>
          ))}
        </div>
      </Section>
      <Section className="text-center">
        <h2 className="mb-4 font-heading text-3xl">
          {home.difference.heading}
        </h2>
        <p className="mx-auto max-w-2xl">{home.difference.copy}</p>
        <ul className="mx-auto mt-4 max-w-md space-y-2 text-left">
          {home.difference.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </Section>
      <Section className="text-center">
        <h2 className="mb-4 font-heading text-3xl">{home.mission.heading}</h2>
        <p>{home.mission.copy}</p>
      </Section>
      <Section>
        <h2 className="mb-4 text-center font-heading text-3xl">
          Featured services
        </h2>
        <ul className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
          {home.featuredServices.map((s) => (
            <li key={s} className="rounded bg-bp-surface p-4 text-center">
              {s}
            </li>
          ))}
        </ul>
      </Section>
      <Section className="mx-auto max-w-3xl">
        <TestimonialCard
          quote={home.testimonialHighlight.quote}
          author={home.testimonialHighlight.author}
        />
        <p className="mt-4 text-right">
          <Link href="/testimonials" className="underline">
            Read more testimonials
          </Link>
        </p>
      </Section>
      <Section className="bg-bp-surface text-center">
        <h2 className="mb-2 font-heading text-3xl">{home.ctaBanner.heading}</h2>
        <p className="mb-4">{home.ctaBanner.copy}</p>
        <Link
          href="/contact"
          className="rounded bg-bp-primary px-4 py-2 text-black"
        >
          {home.ctaBanner.cta}
        </Link>
      </Section>
    </>
  )
}
