'use client'
import { useState, useEffect } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  const toggle = () => {
    document.documentElement.classList.toggle('dark')
  }
  return (
    <button onClick={toggle} className="p-2" aria-label="Toggle dark mode">
      🌓
    </button>
  )
}
