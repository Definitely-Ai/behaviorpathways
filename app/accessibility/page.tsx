import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'

export default function Page() {
  return (
    <>
      <PageHero title="Accessibility Statement" />
      <Section containerClass="max-w-3xl">
        <div className="rounded-2xl bg-bp-surface/80 shadow-3d p-8 animate-fade-in">
          <p>
            We strive to make this website accessible to everyone. If you
            experience barriers please contact us so we can help.
          </p>
        </div>
      </Section>
    </>
  )
}
