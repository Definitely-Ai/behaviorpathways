import Image from 'next/image'
import { ReactNode } from 'react'

export function PageHero({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children?: ReactNode
}) {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-24">
      <Image
        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80"
        alt="Parent playing with child in a bright, welcoming home environment."
        fill
        priority
        className="object-cover object-center scale-105 blur-[1px] brightness-90"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-bp-bg/90 via-bp-bg/70 to-bp-primary/30" />
      <div className="relative mx-auto max-w-4xl px-4 text-center rounded-2xl bg-white/10 backdrop-blur-md shadow-3d border border-white/10 animate-fade-in">
        <h1 className="font-heading text-5xl sm:text-6xl drop-shadow-lg text-bp-primary mb-4 motion-safe:animate-fade-in-up">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-bp-muted font-medium motion-safe:animate-fade-in-up motion-safe:delay-100">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-8 flex flex-wrap justify-center gap-4 motion-safe:animate-fade-in-up motion-safe:delay-200">
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
