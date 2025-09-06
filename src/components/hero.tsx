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
    <section className="relative overflow-hidden py-16 md:py-24">
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
        {/* Stronger Video Overlay for Desktop */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/50 to-black/40"></div>
      </div>

      {/* Mobile Static Background with Enhanced Visual Elements */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-background to-primary/15 md:hidden">
        {/* Mobile-specific floating elements */}
        <div className="absolute left-8 top-20 h-32 w-32 animate-float rounded-full bg-gradient-to-br from-primary/20 to-primary/10 blur-2xl"></div>
        <div
          className="absolute bottom-20 right-8 h-40 w-40 animate-float rounded-full bg-gradient-to-tr from-primary/15 to-primary/5 blur-2xl"
          style={{ animationDelay: '1s' }}
        ></div>
        <div className="absolute left-1/2 top-1/2 h-24 w-24 animate-pulse rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-xl"></div>
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
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="hero-text-overlay animate-fadeInDown text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-2xl sm:text-5xl lg:text-7xl">
                Empowering Communication, Building Independence
              </h1>
              <p className="hero-text-overlay max-w-2xl rounded-lg border border-white/30 bg-white/20 p-6 text-lg leading-relaxed text-white drop-shadow-lg backdrop-blur-sm sm:text-xl">
                Personalized ABA therapy across Naples, Fort Myers, Bonita
                Springs, Estero, Marco Island & Southwest Florida—helping your
                child thrive at home, school, and in the community.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                size="lg"
                className="hover:shadow-3xl group relative overflow-hidden bg-white px-8 py-4 text-lg font-bold text-primary shadow-2xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100"
                asChild
              >
                <Link
                  href="/contact"
                  className="relative z-10 flex items-center"
                >
                  <Phone className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                  <span className="font-bold">Book Your Free Consultation</span>
                </Link>
              </Button>

              <div className="space-y-2">
                <p className="text-sm text-white/90 drop-shadow-md">
                  &ldquo;A better conversation starts here. No pressure—just
                  support.&rdquo;
                </p>
                <p className="text-sm italic text-white/80 drop-shadow-md">
                  &ldquo;Valentina helped my daughter find her voice and we
                  learned how to support her at home.&rdquo; – M.L.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 sm:gap-8">
              <div className="flex items-center space-x-3 rounded-full border border-white/30 bg-white/20 px-4 py-3 shadow-lg backdrop-blur-lg">
                <Award className="h-6 w-6 text-white" />
                <div>
                  <div className="text-xl font-bold text-white">10+</div>
                  <div className="text-xs text-white/90">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 rounded-full border border-white/30 bg-white/20 px-4 py-3 shadow-lg backdrop-blur-lg">
                <Heart className="h-6 w-6 text-white" />
                <div>
                  <div className="text-xl font-bold text-white">100+</div>
                  <div className="text-xs text-white/90">Families Helped</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="relative animate-slideInRight">
              <Card className="glass-card border-0 p-6 shadow-xl sm:p-8">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 text-sm font-bold text-primary-foreground sm:h-12 sm:w-12 sm:text-lg">
                      M
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-base leading-relaxed text-foreground sm:text-lg">
                        &ldquo;Valentina helped my daughter find her voice and
                        we learned how to support her at home.&rdquo;
                      </blockquote>
                      <footer className="mt-3 text-sm font-semibold text-muted-foreground sm:mt-4">
                        - M.L.
                      </footer>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 sm:-right-2 sm:-top-2 sm:h-6 sm:w-6">
                <span className="text-xs text-yellow-800">⭐</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div
                className="glass-card group animate-scaleIn rounded-2xl p-4 transition-all duration-300 hover:shadow-lg sm:p-6"
                style={{ animationDelay: '0.5s' }}
              >
                <div className="text-center">
                  <div className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                    10+
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                    Years Experience
                  </div>
                </div>
              </div>
              <div
                className="glass-card group animate-scaleIn rounded-2xl p-4 transition-all duration-300 hover:shadow-lg sm:p-6"
                style={{ animationDelay: '0.7s' }}
              >
                <div className="text-center">
                  <div className="bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                    100+
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                    Families Helped
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
