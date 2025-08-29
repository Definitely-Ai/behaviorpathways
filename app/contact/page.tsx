import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { ContactForm } from '@/components/contact-form'
import { contact } from '@/content/pages/contact'

export default function Page() {
  return (
    <>
      <PageHero title={contact.heading} subtitle={contact.copy} />
      <Section>
        <div className="max-w-xl mx-auto rounded-2xl bg-bp-surface/80 shadow-3d p-8 animate-fade-in">
          <ContactForm />
        </div>
      </Section>
    </>
  )
}
