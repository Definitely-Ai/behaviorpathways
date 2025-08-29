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
      <Section containerClass="max-w-4xl">
        <div className="grid gap-6 md:grid-cols-2">
          {services.blocks.map((b, i) => (
            <div
              key={b.title}
              className="rounded-2xl bg-gradient-to-br from-bp-surface/90 to-bp-bg/80 p-6 shadow-3d border border-white/10 backdrop-blur-md animate-fade-in motion-safe:transition-transform motion-safe:hover:scale-105"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <h3 className="font-heading text-xl text-bp-primary mb-2">{b.title}</h3>
              <p className="text-bp-muted">{b.copy}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section containerClass="max-w-2xl">
        <h2 className="mb-4 text-center font-heading text-3xl">What to expect</h2>
        <ol className="relative border-l-2 border-bp-primary/40 pl-6 space-y-6">
          {services.timeline.map((step, i) => (
            <li key={step} className="ml-2 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
              <span className="absolute -left-3 top-1.5 w-4 h-4 bg-bp-primary rounded-full border-2 border-white shadow-3d"></span>
              <span className="block text-bp-muted font-medium">{step}</span>
            </li>
          ))}
        </ol>
      </Section>
    </>
  )
}
