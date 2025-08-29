import Link from 'next/link'
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
  return (
    <header className="sticky top-0 z-50 bg-bp-surface text-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="font-heading text-xl">
          {site.name}
        </Link>
        <nav className="hidden gap-4 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:underline">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="rounded bg-bp-primary px-3 py-1 text-black"
          >
            Book a free consult
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
