import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Prose } from '@/components/prose'
import { CTABand } from '@/components/cta-band'
import { generateMetadata as generatePageMetadata } from '@/lib/utils'

export const metadata: Metadata = generatePageMetadata({
  title: 'Parent Training',
  description: 'You are the most important person on the team. We make it easy to learn and use strategies.',
})

export default function ParentTrainingPage() {
  return (
    <div className="py-12">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Parent Training' }]} />
        
        <div className="max-w-4xl mx-auto">
          <Prose>
            <h1>Parent Training</h1>
            <p className="text-xl text-muted-foreground">
              You are the most important person on the team. We make it easy to learn and use strategies.
            </p>
          </Prose>

          <div className="my-16 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold">Weekly coaching</h3>
                <p className="text-muted-foreground">Short mini lessons with simple handouts and video where helpful.</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold">Core skills</h3>
                <p className="text-muted-foreground">Prompting that fades, creating communication moments, handling tricky moments, turning practice into play.</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-bold">Ongoing support</h3>
                <p className="text-muted-foreground">Quick check ins by text or email and clear feedback so you feel confident.</p>
              </div>
            </div>
          </div>

          <CTABand
            title="Request the parent training outline"
            description="Get a detailed overview of our parent training program and how it can help your family."
            primaryAction={{
              text: 'Get Outline',
              href: '/contact',
            }}
          />
        </div>
      </div>
    </div>
  )
}
