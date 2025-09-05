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
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5"></div>
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl md:h-96 md:w-96"></div>
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gradient-to-tr from-green-400/10 to-blue-400/10 blur-3xl md:h-96 md:w-96"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                ✨ Trusted by 100+ families
              </div>
              <h1 className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent sm:text-5xl lg:text-7xl">
                Independent communication starts here
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
                Personalized ABA support that meets you at home, at school, and
                in the community so real life progress can happen every day.
              </p>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl border border-white/20 bg-white/60 p-6 shadow-lg backdrop-blur-sm">
                <p className="text-lg leading-relaxed text-gray-700">
                  We focus on communication first. When children can ask, share,
                  and participate, life opens up for everyone around them.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {miniSections.map((section, index) => (
                  <div
                    key={index}
                    className="group rounded-xl border border-white/30 bg-white/40 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:shadow-lg sm:p-6"
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 group-hover:scale-110" />
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-700 sm:text-base">
                          {section.title}
                        </h3>
                        <p className="mt-1 text-xs text-gray-600 sm:text-sm">
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
                className="transform bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
                asChild
              >
                <Link href="/contact">Book a free intro call</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50"
                asChild
              >
                <Link href="/approach">Learn how we work</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 rounded-full border border-white/30 bg-white/60 px-3 py-2 text-xs text-gray-600 backdrop-blur-sm sm:text-sm"
                >
                  <badge.icon className="h-3 w-3 text-blue-600 sm:h-4 sm:w-4" />
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="relative">
              <Card className="border-0 bg-white/80 p-6 shadow-xl backdrop-blur-sm sm:p-8">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-lg">
                      M
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-base leading-relaxed text-gray-700 sm:text-lg">
                        &ldquo;Valentina helped my daughter find her voice and
                        we learned how to support her at home.&rdquo;
                      </blockquote>
                      <footer className="mt-3 text-sm font-semibold text-gray-600 sm:mt-4">
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
              <div className="group rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-4 transition-all duration-300 hover:shadow-lg sm:p-6">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                    10+
                  </div>
                  <div className="mt-1 text-xs font-medium text-gray-600 sm:text-sm">
                    Years Experience
                  </div>
                </div>
              </div>
              <div className="group rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100 p-4 transition-all duration-300 hover:shadow-lg sm:p-6">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                    100+
                  </div>
                  <div className="mt-1 text-xs font-medium text-gray-600 sm:text-sm">
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
