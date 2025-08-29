import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { services } from '@/content/pages/services'

export default function Page() {
  return (
    <>
      <PageHero
        title={services.intro.heading}
        subtitle={services.intro.subheading}
      />
      <Section>
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
          {services.blocks.map((b) => (
            <div key={b.title} className="rounded bg-bp-surface p-4">
              <h3 className="font-heading text-xl">{b.title}</h3>
              <p>{b.copy}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <h2 className="mb-4 text-center font-heading text-3xl">
          What to expect
        </h2>
        <ol className="mx-auto max-w-2xl list-decimal space-y-2 pl-6">
          {services.timeline.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </Section>
    </>
  )
}
