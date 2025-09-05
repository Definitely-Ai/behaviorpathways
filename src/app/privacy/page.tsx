import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Prose } from '@/components/prose'
import { generateMetadata as generatePageMetadata } from '@/lib/utils'

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description: 'Learn how we collect, use, and protect your personal information.',
})

export default function PrivacyPage() {
  return (
    <div className="py-12">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
        
        <div className="max-w-4xl mx-auto">
          <Prose>
            <h1>Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2>Information we collect</h2>
            <p>We collect information you provide directly to us, such as when you fill out our contact form, including:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>City and state</li>
              <li>Preferred contact method</li>
              <li>How we can help message</li>
            </ul>

            <h2>How we use your information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries</li>
              <li>Provide information about our services</li>
              <li>Schedule consultations</li>
              <li>Improve our website and services</li>
            </ul>

            <h2>Information sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>

            <h2>Data security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

            <h2>Contact us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at hello@behaviorpathways.com.</p>
          </Prose>
        </div>
      </div>
    </div>
  )
}
