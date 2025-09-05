'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/siteConfig'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/95 shadow-lg backdrop-blur-xl supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center space-x-4">
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
              <span className="text-lg font-bold text-white">BP</span>
            </div>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 opacity-0 blur transition-all duration-300 group-hover:opacity-20"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
              Behavior Pathways
            </span>
            <span className="text-xs font-medium text-gray-500 -mt-1">
              ABA Services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-1 lg:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative rounded-xl px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-700"
            >
              <span className="relative z-10">{item.name}</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center space-x-3 lg:flex">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-600 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
            asChild
          >
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Contact
            </Link>
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:-translate-y-0.5"
            asChild
          >
            <Link href="/contact">Book Free Call</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden h-12 w-12 rounded-xl hover:bg-blue-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative h-6 w-6">
            <span className={`absolute left-0 top-1 h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`absolute left-0 top-3 h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`absolute left-0 top-5 h-0.5 w-6 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-200/50 bg-white/95 backdrop-blur-xl lg:hidden">
          <div className="container space-y-8 py-8">
            <div className="grid grid-cols-2 gap-4">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group rounded-xl bg-gray-50 p-4 text-center transition-all duration-300 hover:bg-blue-50 hover:shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-700">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="space-y-4 border-t border-gray-200 pt-6">
              <Button
                variant="outline"
                className="w-full border-gray-300 text-gray-600 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
                asChild
              >
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
                asChild
              >
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Book Free Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
