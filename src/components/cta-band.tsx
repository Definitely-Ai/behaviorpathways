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

export function CTABand({
  title,
  description,
  primaryAction,
  secondaryAction,
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#71c1f2] via-[#4a9fd1] to-[#8dd3f7] py-16 text-white md:py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#71c1f2]/90 via-[#4a9fd1]/90 to-[#8dd3f7]/90"></div>
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl md:h-96 md:w-96 animate-float"></div>
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/10 blur-3xl md:h-96 md:w-96 animate-float" style={{animationDelay: '1s'}}></div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl space-y-6 text-center md:space-y-8">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
            {description}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
            <Button
              size="lg"
              className="transform bg-white px-8 py-4 text-lg font-semibold text-[#71c1f2] shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-2xl animate-bounce"
              asChild
            >
              <Link href={primaryAction.href}>{primaryAction.text}</Link>
            </Button>
            {secondaryAction && (
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#71c1f2]"
                asChild
              >
                <Link href={secondaryAction.href}>{secondaryAction.text}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
