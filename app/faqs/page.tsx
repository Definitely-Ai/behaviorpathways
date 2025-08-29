import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { FAQAccordion } from '@/components/faq-accordion'
import { faqs } from '@/content/pages/faqs'

export default function Page() {
  return (
    <>
      <PageHero title="FAQs" />
      <Section containerClass="max-w-3xl">
        <div className="rounded-2xl bg-bp-surface/70 shadow-3d p-4 animate-fade-in">
          <FAQAccordion items={faqs} />
        </div>
      </Section>
    </>
  )
}
