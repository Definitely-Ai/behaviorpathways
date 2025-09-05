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
    <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-blue-800/90"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">{title}</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 px-8 py-4 text-lg font-semibold" asChild>
              <Link href={primaryAction.href}>
                {primaryAction.text}
              </Link>
            </Button>
            {secondaryAction && (
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 px-8 py-4 text-lg font-semibold" asChild>
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
