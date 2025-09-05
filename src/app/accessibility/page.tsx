import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Prose } from '@/components/prose'
import { generateMetadata as generatePageMetadata } from '@/lib/utils'

export const metadata: Metadata = generatePageMetadata({
  title: 'Accessibility Statement',
  description: 'We aim to meet WCAG AA standards and welcome feedback on accessibility.',
})

export default function AccessibilityPage() {
  return (
    <div className="py-12">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Accessibility Statement' }]} />
        
        <div className="max-w-4xl mx-auto">
          <Prose>
            <h1>Accessibility Statement</h1>
            <p className="text-lg text-muted-foreground">
              We are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
            </p>

            <h2>Conformance status</h2>
            <p>The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. Behavior Pathways is partially conformant with WCAG 2.1 level AA.</p>

            <h2>Feedback</h2>
            <p>We welcome your feedback on the accessibility of Behavior Pathways. Please let us know if you encounter accessibility barriers:</p>
            <ul>
              <li>Email: hello@behaviorpathways.com</li>
              <li>Phone: (555) 123-4567</li>
            </ul>

            <h2>Contact us</h2>
            <p>If you wish to report an accessibility issue, have any questions or need assistance, please contact us at hello@behaviorpathways.com.</p>
          </Prose>
        </div>
      </div>
    </div>
  )
}
