'use client'
import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])
  const toggle = () => {
    document.documentElement.classList.toggle('dark')
    setDark((d) => !d)
  }
  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full bg-bp-surface/60 hover:bg-bp-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-bp-primary"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {dark ? <Sun className="w-5 h-5 text-bp-primary" /> : <Moon className="w-5 h-5 text-bp-primary" />}
    </button>
  )
}
