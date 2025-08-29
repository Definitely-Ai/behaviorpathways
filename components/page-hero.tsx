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
    <div className="relative flex min-h-[60vh] items-center justify-center overflow-hidden py-24">
      <Image
        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80"
        alt="Parent playing with child"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-bp-bg/80" />
      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <h1 className="font-heading text-5xl sm:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-bp-muted">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}
