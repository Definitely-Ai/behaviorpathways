'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Home, Users, GraduationCap } from 'lucide-react'

const trustBadges = [
  { icon: CheckCircle, text: 'Licensed and insured' },
  { icon: Home, text: 'In home and community based' },
  { icon: Users, text: 'Parent coaching focused' },
]

const miniSections = [
  {
    title: 'Communication skill building',
    description: 'From first requests to flexible conversations',
  },
  {
    title: 'Parent coaching',
    description:
      'We teach you the tools so progress continues between sessions',
  },
  {
    title: 'School partnership',
    description: 'We collaborate with teachers so support is consistent',
  },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/10"></div>
      <div className="animate-float absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 blur-3xl md:h-96 md:w-96"></div>
      <div
        className="animate-float absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gradient-to-tr from-primary/15 to-primary/10 blur-3xl md:h-96 md:w-96"
        style={{ animationDelay: '1s' }}
      ></div>
      <div className="absolute left-1/2 top-1/2 h-32 w-32 animate-pulse rounded-full bg-gradient-to-br from-primary/5 to-primary/10 blur-2xl"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="animate-scaleIn mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                ✨ Trusted by families across Naples & Collier County
              </div>
              <h1 className="animate-fadeInDown bg-gradient-to-r from-foreground via-primary to-primary/80 bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent sm:text-5xl lg:text-7xl">
                Independent communication starts here
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Personalized ABA therapy services in Naples, Bonita Springs, and
                Collier County, Florida. We meet you at home, at school, and in
                the community so real life progress can happen every day.
              </p>
            </div>

            <div className="space-y-8">
              <div className="glass-card animate-slideInLeft rounded-2xl p-6 shadow-lg">
                <p className="text-lg leading-relaxed text-foreground">
                  We focus on communication first. When children can ask, share,
                  and participate, life opens up for everyone around them.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {miniSections.map((section, index) => (
                  <div
                    key={index}
                    className="glass-card animate-scaleIn group rounded-xl p-4 transition-all duration-300 hover:shadow-lg sm:p-6"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-full bg-gradient-to-r from-primary to-primary/80 transition-transform duration-300 group-hover:scale-110" />
                      <div>
                        <h3 className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-base">
                          {section.title}
                        </h3>
                        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                          {section.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="transform bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:from-primary/90 hover:to-primary hover:shadow-xl hover:shadow-primary/30"
                asChild
              >
                <Link href="/contact">Book a free intro call</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-foreground transition-all duration-300 hover:border-primary/80 hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <Link href="/approach">Learn how we work</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="glass animate-scaleIn flex items-center space-x-2 rounded-full px-3 py-2 text-xs text-muted-foreground sm:text-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <badge.icon className="h-3 w-3 text-primary sm:h-4 sm:w-4" />
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="animate-slideInRight relative">
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
                className="glass-card animate-scaleIn group rounded-2xl p-4 transition-all duration-300 hover:shadow-lg sm:p-6"
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
                className="glass-card animate-scaleIn group rounded-2xl p-4 transition-all duration-300 hover:shadow-lg sm:p-6"
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
