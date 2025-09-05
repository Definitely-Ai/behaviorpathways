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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#71c1f2]/5 via-white to-[#8dd3f7]/5 py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#71c1f2]/5 via-transparent to-[#8dd3f7]/5"></div>
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-[#71c1f2]/10 to-[#8dd3f7]/10 blur-3xl md:h-96 md:w-96 animate-float"></div>
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gradient-to-tr from-[#4a9fd1]/10 to-[#71c1f2]/10 blur-3xl md:h-96 md:w-96 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 h-32 w-32 rounded-full bg-gradient-to-br from-[#71c1f2]/5 to-[#8dd3f7]/5 blur-2xl animate-pulse"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="mb-4 inline-flex items-center rounded-full bg-[#71c1f2]/10 px-4 py-2 text-sm font-medium text-[#71c1f2] animate-scaleIn">
                ✨ Trusted by 100+ families
              </div>
              <h1 className="bg-gradient-to-r from-gray-900 via-[#71c1f2] to-[#4a9fd1] bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent sm:text-5xl lg:text-7xl animate-fadeInDown">
                Independent communication starts here
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
                Personalized ABA support that meets you at home, at school, and
                in the community so real life progress can happen every day.
              </p>
            </div>

            <div className="space-y-8">
              <div className="rounded-2xl border border-[#71c1f2]/20 bg-white/60 p-6 shadow-lg backdrop-blur-sm animate-slideInLeft">
                <p className="text-lg leading-relaxed text-gray-700">
                  We focus on communication first. When children can ask, share,
                  and participate, life opens up for everyone around them.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                {miniSections.map((section, index) => (
                  <div
                    key={index}
                    className="group rounded-xl border border-[#71c1f2]/30 bg-white/40 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:shadow-lg sm:p-6 animate-scaleIn"
                    style={{animationDelay: `${index * 200}ms`}}
                  >
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="mt-1.5 h-3 w-3 flex-shrink-0 rounded-full bg-gradient-to-r from-[#71c1f2] to-[#8dd3f7] transition-transform duration-300 group-hover:scale-110" />
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#71c1f2] sm:text-base">
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
                className="transform bg-gradient-to-r from-[#71c1f2] to-[#4a9fd1] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:from-[#4a9fd1] hover:to-[#71c1f2] hover:shadow-xl hover:shadow-[#71c1f2]/30 animate-bounce"
                asChild
              >
                <Link href="/contact">Book a free intro call</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#71c1f2] transition-all duration-300 hover:border-[#4a9fd1] hover:bg-[#71c1f2]/10 hover:text-[#71c1f2]"
                asChild
              >
                <Link href="/approach">Learn how we work</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 rounded-full border border-[#71c1f2]/30 bg-white/60 px-3 py-2 text-xs text-gray-600 backdrop-blur-sm sm:text-sm animate-scaleIn"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <badge.icon className="h-3 w-3 text-[#71c1f2] sm:h-4 sm:w-4" />
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="relative animate-slideInRight">
              <Card className="border-0 bg-white/80 p-6 shadow-xl backdrop-blur-sm sm:p-8">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#71c1f2] to-[#8dd3f7] text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-lg">
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
              <div className="group rounded-2xl border border-[#71c1f2]/20 bg-gradient-to-br from-[#71c1f2]/10 to-[#8dd3f7]/10 p-4 transition-all duration-300 hover:shadow-lg sm:p-6 animate-scaleIn" style={{animationDelay: '0.5s'}}>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-[#71c1f2] to-[#4a9fd1] bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                    10+
                  </div>
                  <div className="mt-1 text-xs font-medium text-gray-600 sm:text-sm">
                    Years Experience
                  </div>
                </div>
              </div>
              <div className="group rounded-2xl border border-[#8dd3f7]/20 bg-gradient-to-br from-[#8dd3f7]/10 to-[#71c1f2]/10 p-4 transition-all duration-300 hover:shadow-lg sm:p-6 animate-scaleIn" style={{animationDelay: '0.7s'}}>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-[#4a9fd1] to-[#71c1f2] bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
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
