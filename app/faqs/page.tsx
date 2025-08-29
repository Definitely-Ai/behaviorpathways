import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { FAQAccordion } from '@/components/faq-accordion'
import { faqs } from '@/content/pages/faqs'

export default function Page() {
  return (
    <>
      <PageHero title="FAQs" />
      <Section containerClass="max-w-3xl">
        <FAQAccordion items={faqs} />
      </Section>
    </>
  )
}
