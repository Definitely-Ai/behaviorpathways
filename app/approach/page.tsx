import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { approach } from '@/content/pages/approach'

export default function Page() {
  return (
    <>
      <PageHero title={approach.heading} />
      <Section containerClass="max-w-3xl space-y-4">
        <p>{approach.copy}</p>
        <ul className="list-disc space-y-2 pl-6">
          {approach.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </Section>
    </>
  )
}
