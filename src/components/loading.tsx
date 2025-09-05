'use client'

import { cn } from '@/lib/utils'

interface LoadingProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Loading({ className, size = 'md' }: LoadingProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  }

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-2 border-primary/20 border-t-primary',
        sizeClasses[size],
        className
      )}
    />
  )
}

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <Loading size="lg" />
    </div>
  )
}

export function LoadingCard() {
  return (
    <div className="bg-card rounded-lg border p-6 shadow-sm">
      <div className="space-y-4">
        <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
        <div className="space-y-2">
          <div className="h-3 w-full animate-pulse rounded bg-muted" />
          <div className="h-3 w-5/6 animate-pulse rounded bg-muted" />
        </div>
        <div className="h-8 w-24 animate-pulse rounded bg-muted" />
      </div>
    </div>
  )
}
