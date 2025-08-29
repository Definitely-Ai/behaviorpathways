import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { parentTraining } from '@/content/pages/parent-training'

export default function Page() {
  return (
    <>
      <PageHero title={parentTraining.heading} />
      <Section className="mx-auto max-w-3xl space-y-4">
        <p>{parentTraining.copy}</p>
        <h2 className="font-heading text-2xl">Learn to:</h2>
        <ul className="list-disc space-y-2 pl-6">
          {parentTraining.learn.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </Section>
    </>
  )
}
