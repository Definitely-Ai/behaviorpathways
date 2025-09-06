'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  CheckCircle,
  Home,
  Users,
  GraduationCap,
  MessageCircle,
  Heart,
  Star,
  Shield,
  Award,
  Sparkles,
  Phone,
} from 'lucide-react'

const trustBadges = [
  { icon: CheckCircle, text: 'Licensed and insured' },
  { icon: Home, text: 'In home and community based' },
  { icon: Users, text: 'Parent coaching focused' },
]

const miniSections = [
  {
    title: 'Communication skill building',
    description: 'From first requests to flexible conversations',
    icon: MessageCircle,
  },
  {
    title: 'Parent coaching',
    description:
      'We teach you the tools so progress continues between sessions',
    icon: Heart,
  },
  {
    title: 'School partnership',
    description: 'We collaborate with teachers so support is consistent',
    icon: GraduationCap,
  },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden py-12 md:py-24">
      {/* Desktop Video Background */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src="/Website_Content_to_Video_Generation.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dynamic Video Overlay for Desktop - Enhanced contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/70 to-black/60"></div>
        {/* Additional overlay for text areas */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
      </div>

      {/* Mobile Static Background with Enhanced Visual Elements */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/15 via-background to-primary/20 md:hidden">
        {/* Mobile-specific floating elements */}
        <div className="absolute left-8 top-20 h-32 w-32 animate-float rounded-full bg-gradient-to-br from-primary/25 to-primary/15 blur-2xl"></div>
        <div
          className="absolute bottom-20 right-8 h-40 w-40 animate-float rounded-full bg-gradient-to-tr from-primary/20 to-primary/10 blur-2xl"
          style={{ animationDelay: '1s' }}
        ></div>
        <div className="to-primary/8 absolute left-1/2 top-1/2 h-24 w-24 animate-pulse rounded-full bg-gradient-to-br from-primary/15 blur-xl"></div>
      </div>

      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/10"></div>
      <div className="absolute right-0 top-0 h-64 w-64 animate-float rounded-full bg-gradient-to-br from-primary/10 to-primary/20 blur-3xl md:h-96 md:w-96"></div>
      <div
        className="absolute bottom-0 left-0 h-64 w-64 animate-float rounded-full bg-gradient-to-tr from-primary/15 to-primary/10 blur-3xl md:h-96 md:w-96"
        style={{ animationDelay: '1s' }}
      ></div>
      <div className="absolute left-1/2 top-1/2 h-32 w-32 animate-pulse rounded-full bg-gradient-to-br from-primary/5 to-primary/10 blur-2xl"></div>

      {/* Floating Icons */}
      <div
        className="absolute left-10 top-20 animate-float opacity-20"
        style={{ animationDelay: '0.5s' }}
      >
        <MessageCircle className="h-8 w-8 text-primary" />
      </div>
      <div
        className="absolute right-20 top-40 animate-float opacity-20"
        style={{ animationDelay: '1.5s' }}
      >
        <Heart className="h-6 w-6 text-primary" />
      </div>
      <div
        className="absolute bottom-32 left-20 animate-float opacity-20"
        style={{ animationDelay: '2s' }}
      >
        <Star className="h-7 w-7 text-primary" />
      </div>
      <div
        className="absolute bottom-20 right-10 animate-float opacity-20"
        style={{ animationDelay: '0.8s' }}
      >
        <Sparkles className="h-5 w-5 text-primary" />
      </div>

      <div className="container relative z-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 md:space-y-10">
            <div className="space-y-6">
              <h1 className="hero-text-overlay animate-fadeInDown text-3xl font-bold leading-tight tracking-tight text-foreground drop-shadow-lg sm:text-4xl md:hidden">
                Empowering Communication, Building Independence
              </h1>
              <h1 className="hero-text-overlay hidden animate-fadeInDown text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-2xl sm:text-4xl md:block lg:text-7xl">
                Empowering Communication, Building Independence
              </h1>
              <p className="hero-text-overlay max-w-2xl rounded-lg border border-border/30 bg-background/80 p-4 text-base leading-relaxed text-foreground drop-shadow-sm backdrop-blur-md sm:text-lg md:hidden">
                Personalized ABA therapy across Naples, Fort Myers, Bonita
                Springs, Estero, Marco Island & Southwest Florida—helping your
                child thrive at home, school, and in the community.
              </p>
              <p className="hero-text-overlay hidden max-w-2xl rounded-lg border border-white/40 bg-white/30 p-6 text-lg leading-relaxed text-white drop-shadow-lg backdrop-blur-md sm:text-xl md:block">
                Personalized ABA therapy across Naples, Fort Myers, Bonita
                Springs, Estero, Marco Island & Southwest Florida—helping your
                child thrive at home, school, and in the community.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                className="hover:shadow-3xl group relative overflow-hidden bg-white px-6 py-3 text-base font-bold text-primary shadow-2xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 sm:px-8 sm:py-4 sm:text-lg"
                asChild
              >
                <Link
                  href="/contact"
                  className="relative z-10 flex items-center"
                >
                  <Phone className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 sm:h-5 sm:w-5" />
                  <span className="font-bold">Book Your Free Consultation</span>
                </Link>
              </Button>

              <div className="space-y-2">
                <p className="text-xs text-muted-foreground drop-shadow-md sm:text-sm md:hidden">
                  &ldquo;A better conversation starts here. No pressure—just
                  support.&rdquo;
                </p>
                <p className="hidden text-sm text-white/90 drop-shadow-md md:block">
                  &ldquo;A better conversation starts here. No pressure—just
                  support.&rdquo;
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8">
              <div className="flex items-center space-x-2 rounded-full border border-border/30 bg-background/80 px-3 py-2 shadow-lg backdrop-blur-md sm:space-x-3 sm:px-4 sm:py-3 md:hidden">
                <Award className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                <div>
                  <div className="text-lg font-bold text-foreground sm:text-xl">
                    10+
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Years Experience
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 rounded-full border border-border/30 bg-background/80 px-3 py-2 shadow-lg backdrop-blur-md sm:space-x-3 sm:px-4 sm:py-3 md:hidden">
                <Heart className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                <div>
                  <div className="text-lg font-bold text-foreground sm:text-xl">
                    100+
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Families Helped
                  </div>
                </div>
              </div>
              <div className="flex hidden items-center space-x-2 rounded-full border border-white/40 bg-white/30 px-3 py-2 shadow-xl backdrop-blur-lg sm:space-x-3 sm:px-4 sm:py-3 md:flex">
                <Award className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                <div>
                  <div className="text-lg font-bold text-white sm:text-xl">
                    10+
                  </div>
                  <div className="text-xs text-white/95">Years Experience</div>
                </div>
              </div>
              <div className="flex hidden items-center space-x-2 rounded-full border border-white/40 bg-white/30 px-3 py-2 shadow-xl backdrop-blur-lg sm:space-x-3 sm:px-4 sm:py-3 md:flex">
                <Heart className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                <div>
                  <div className="text-lg font-bold text-white sm:text-xl">
                    100+
                  </div>
                  <div className="text-xs text-white/95">Families Helped</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
