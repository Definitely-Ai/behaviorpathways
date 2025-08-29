import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'

export default function Page() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <Section containerClass="max-w-3xl">
        <div className="rounded-2xl bg-bp-surface/80 shadow-3d p-8 space-y-4 animate-fade-in">
          <p>
            We respect your privacy and collect only the information necessary to
            respond to your inquiries.
          </p>
          <p>
            We do not sell or share your personal data. You may contact us to
            request removal of your information.
          </p>
        </div>
      </Section>
    </>
  )
}
