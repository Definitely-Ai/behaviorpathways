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
    <div className="py-20 text-center">
      <h1 className="font-heading text-4xl">{title}</h1>
      {subtitle && <p className="mt-4 text-lg">{subtitle}</p>}
      {children && (
        <div className="mt-6 flex justify-center gap-4">{children}</div>
      )}
    </div>
  )
}
