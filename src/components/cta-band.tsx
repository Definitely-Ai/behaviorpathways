import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

interface CTABandProps {
  title: string
  description: string
  primaryAction: {
    text: string
    href: string
  }
  secondaryAction?: {
    text: string
    href: string
  }
}

export function CTABand({ title, description, primaryAction, secondaryAction }: CTABandProps) {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container">
        <div className="text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">{title}</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href={primaryAction.href}>
                {primaryAction.text}
              </Link>
            </Button>
            {secondaryAction && (
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href={secondaryAction.href}>
                  {secondaryAction.text}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
