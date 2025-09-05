import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Sparkles, ArrowRight, Star } from 'lucide-react'

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
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#71c1f2]/90 via-[#4a9fd1]/90 to-[#8dd3f7]/90"></div>
      <div className="animate-float absolute right-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl md:h-96 md:w-96"></div>
      <div
        className="animate-float absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/10 blur-3xl md:h-96 md:w-96"
        style={{ animationDelay: '1s' }}
      ></div>

      {/* Floating Icons */}
      <div
        className="animate-float absolute left-10 top-20 opacity-20"
        style={{ animationDelay: '0.5s' }}
      >
        <Sparkles className="h-8 w-8 text-white" />
      </div>
      <div
        className="animate-float absolute right-20 top-40 opacity-20"
        style={{ animationDelay: '1.5s' }}
      >
        <Star className="h-6 w-6 text-white" />
      </div>
      <div
        className="animate-float absolute bottom-32 left-20 opacity-20"
        style={{ animationDelay: '2s' }}
      >
        <Phone className="h-7 w-7 text-white" />
      </div>

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
              className="group transform bg-white px-8 py-4 text-lg font-semibold text-[#71c1f2] shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-2xl"
              asChild
            >
              <Link href={primaryAction.href} className="flex items-center">
                <Phone className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                {primaryAction.text}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            {secondaryAction && (
              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#71c1f2]"
                asChild
              >
                <Link href={secondaryAction.href} className="flex items-center">
                  {secondaryAction.text}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
