'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { site } from '@/content/site'
import { ThemeToggle } from './theme-toggle'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/why-us', label: 'Why Us' },
  { href: '/services', label: 'Services' },
  { href: '/approach', label: 'Approach' },
  { href: '/parent-training', label: 'Parent Training' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-bp-bg/80 backdrop-blur shadow-3d">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-heading text-2xl font-bold text-bp-primary drop-shadow">
          {site.name}
        </Link>
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-bp-primary"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <ul className={`flex-1 md:flex gap-6 items-center justify-center hidden md:flex ${open ? 'block' : 'hidden'}`}> 
          {nav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-medium px-3 py-2 rounded transition-3d ${
                  typeof window !== 'undefined' && window.location.pathname === link.href ? 'bg-bp-primary text-black shadow-3d' : 'hover:bg-bp-surface'
                }`}
                aria-current={typeof window !== 'undefined' && window.location.pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden md:inline-block bg-bp-primary text-black px-4 py-2 rounded-xl font-semibold shadow-3d transition-3d hover:scale-105"
          >
            Book a free consult
          </Link>
          <ThemeToggle />
        </div>
      </nav>
      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-bp-bg border-t border-bp-surface px-4 py-2">
          {nav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-4 py-2 rounded transition-3d hover:bg-bp-surface`}
                onClick={() => setOpen(false)}
                aria-current={typeof window !== 'undefined' && window.location.pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="block bg-bp-primary text-black px-4 py-2 rounded-xl font-semibold shadow-3d mt-2"
              onClick={() => setOpen(false)}
            >
              Book a free consult
            </Link>
          </li>
        </ul>
      )}
    </header>
  )
}
