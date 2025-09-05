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
    description: 'We teach you the tools so progress continues between sessions',
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
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-green-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                ✨ Trusted by 100+ families
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
                Independent communication starts here
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Personalized ABA support that meets you at home, at school, and in the community so real life progress can happen every day.
              </p>
            </div>

            <div className="space-y-8">
              <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We focus on communication first. When children can ask, share, and participate, life opens up for everyone around them.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {miniSections.map((section, index) => (
                  <div key={index} className="group p-4 sm:p-6 bg-white/40 backdrop-blur-sm rounded-xl border border-white/30 hover:bg-white/60 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-1.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 text-sm sm:text-base">{section.title}</h3>
                        <p className="text-gray-600 text-xs sm:text-sm mt-1">{section.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5" asChild>
                <Link href="/contact">Book a free intro call</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300" asChild>
                <Link href="/approach">Learn how we work</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 bg-white/60 backdrop-blur-sm px-3 py-2 rounded-full border border-white/30">
                  <badge.icon className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />
                  <span className="font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="relative">
              <Card className="p-6 sm:p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0">
                      M
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        &ldquo;Valentina helped my daughter find her voice and we learned how to support her at home.&rdquo;
                      </blockquote>
                      <footer className="mt-3 sm:mt-4 text-sm font-semibold text-gray-600">- M.L.</footer>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-yellow-800 text-xs">⭐</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="group p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">10+</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">Years Experience</div>
                </div>
              </div>
              <div className="group p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">100+</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">Families Helped</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
