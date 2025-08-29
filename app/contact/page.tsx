import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { ContactForm } from '@/components/contact-form'
import { contact } from '@/content/pages/contact'

export default function Page() {
  return (
    <>
      <PageHero title={contact.heading} subtitle={contact.copy} />
      <Section>
        <ContactForm />
      </Section>
    </>
  )
}
