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
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Independent communication starts here
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Personalized ABA support that meets you at home, at school, and in the community so real life progress can happen every day.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                We focus on communication first. When children can ask, share, and participate, life opens up for everyone around them.
              </p>

              <div className="space-y-4">
                {miniSections.map((section, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{section.title}</h3>
                      <p className="text-muted-foreground">{section.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Book a free intro call</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/approach">Learn how we work</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <badge.icon className="h-4 w-4 text-primary" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <blockquote className="text-lg italic text-muted-foreground">
                  "Valentina helped my daughter find her voice and we learned how to support her at home."
                </blockquote>
                <footer className="mt-4 text-sm font-medium">- M.L.</footer>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4">
                <CardContent className="p-0 text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="p-4">
                <CardContent className="p-0 text-center">
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Families Helped</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
