import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'

export default function Page() {
  return (
    <>
      <PageHero title="Accessibility Statement" />
      <Section containerClass="max-w-3xl space-y-4">
        <p>
          We strive to make this website accessible to everyone. If you
          experience barriers please contact us so we can help.
        </p>
      </Section>
    </>
  )
}
