import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { parentTraining } from '@/content/pages/parent-training'

export default function Page() {
  return (
    <>
      <PageHero title={parentTraining.heading} />
      <Section containerClass="max-w-3xl space-y-6">
        <p className="bg-bp-surface/70 rounded-xl p-6 shadow-3d text-bp-muted animate-fade-in">{parentTraining.copy}</p>
        <h2 className="font-heading text-2xl">Learn to:</h2>
        <ul className="list-disc space-y-4 pl-8">
          {parentTraining.learn.map((l, i) => (
            <li key={l} className="bg-bp-surface/60 rounded-lg p-4 shadow-3d animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>{l}</li>
          ))}
        </ul>
      </Section>
    </>
  )
}
