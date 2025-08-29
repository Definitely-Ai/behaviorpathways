import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { whyUs } from '@/content/pages/why-us'

export default function Page() {
  return (
    <>
      <PageHero title={whyUs.heading} />
      <Section containerClass="max-w-3xl space-y-6">
        {whyUs.copy.map((p, i) => (
          <p key={p} className="bg-bp-surface/70 rounded-xl p-6 shadow-3d text-bp-muted animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>{p}</p>
        ))}
      </Section>
    </>
  )
}
