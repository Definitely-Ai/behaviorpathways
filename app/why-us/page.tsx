import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { whyUs } from '@/content/pages/why-us'

export default function Page() {
  return (
    <>
      <PageHero title={whyUs.heading} />
      <Section className="mx-auto max-w-3xl space-y-4">
        {whyUs.copy.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Section>
    </>
  )
}
