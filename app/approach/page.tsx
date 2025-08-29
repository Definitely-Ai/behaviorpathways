import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { approach } from '@/content/pages/approach'

export default function Page() {
  return (
    <>
      <PageHero title={approach.heading} />
      <Section containerClass="max-w-3xl space-y-6">
        <p className="bg-bp-surface/70 rounded-xl p-6 shadow-3d text-bp-muted animate-fade-in">{approach.copy}</p>
        <ul className="list-disc space-y-4 pl-8">
          {approach.bullets.map((b, i) => (
            <li key={b} className="bg-bp-surface/60 rounded-lg p-4 shadow-3d animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>{b}</li>
          ))}
        </ul>
      </Section>
    </>
  )
}
