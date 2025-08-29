import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'

export default function Page() {
  return (
    <>
      <PageHero title="Terms of Service" />
      <Section containerClass="max-w-3xl space-y-4">
        <p>
          This website provides general information about our services. Use of
          the site does not create a provider-client relationship.
        </p>
        <p>
          By using this site you agree not to misuse it or attempt to access
          data without permission.
        </p>
      </Section>
    </>
  )
}
