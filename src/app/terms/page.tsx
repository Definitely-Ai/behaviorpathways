import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Prose } from '@/components/prose'
import { generateMetadata as generatePageMetadata } from '@/lib/utils'

export const metadata: Metadata = generatePageMetadata({
  title: 'Terms of Service',
  description: 'Terms and conditions for using our website and services.',
})

export default function TermsPage() {
  return (
    <div className="py-12">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
        
        <div className="max-w-4xl mx-auto">
          <Prose>
            <h1>Terms of Service</h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2>Acceptance of terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

            <h2>Use license</h2>
            <p>Permission is granted to temporarily download one copy of the materials on Behavior Pathways&apos; website for personal, non-commercial transitory viewing only.</p>

            <h2>Disclaimer</h2>
            <p>The materials on Behavior Pathways&apos; website are provided on an &apos;as is&apos; basis. Behavior Pathways makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

            <h2>Limitations</h2>
            <p>In no event shall Behavior Pathways or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Behavior Pathways&apos; website.</p>

            <h2>Contact information</h2>
            <p>If you have any questions about these Terms of Service, please contact us at hello@behaviorpathways.com.</p>
          </Prose>
        </div>
      </div>
    </div>
  )
}
