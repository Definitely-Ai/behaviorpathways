import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'

export default function Page() {
  return (
    <>
      <PageHero title="Terms of Service" />
      <Section containerClass="max-w-3xl">
        <div className="rounded-2xl bg-bp-surface/80 shadow-3d p-8 space-y-4 animate-fade-in">
          <p>
            This website provides general information about our services. Use of
            the site does not create a provider-client relationship.
          </p>
          <p>
            By using this site you agree not to misuse it or attempt to access
            data without permission.
          </p>
        </div>
      </Section>
    </>
  )
}
