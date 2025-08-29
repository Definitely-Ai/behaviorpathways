import { ReactNode } from 'react'

export function Section({
  children,
  className = '',
  containerClass = '',
}: {
  children: ReactNode
  className?: string
  containerClass?: string
}) {
  return (
    <section className={`py-16 ${className}`}>
      <div className={`mx-auto max-w-5xl px-4 ${containerClass} rounded-2xl bg-bp-surface/60 shadow-3d backdrop-blur-md`}> 
        {children}
      </div>
    </section>
  )
}
