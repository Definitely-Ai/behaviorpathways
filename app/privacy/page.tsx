import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'

export default function Page() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <Section className="mx-auto max-w-3xl space-y-4">
        <p>
          We respect your privacy and collect only the information necessary to
          respond to your inquiries.
        </p>
        <p>
          We do not sell or share your personal data. You may contact us to
          request removal of your information.
        </p>
      </Section>
    </>
  )
}
