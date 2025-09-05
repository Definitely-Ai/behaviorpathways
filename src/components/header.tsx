'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/siteConfig'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
            <span className="text-white font-bold text-sm">BP</span>
          </div>
          <span className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">Behavior Pathways</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300" asChild>
            <Link href="/contact">
              <Phone className="h-4 w-4 mr-2" />
              Contact
            </Link>
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300" asChild>
            <Link href="/contact">Book Free Call</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
          <div className="container py-6 space-y-6">
            <div className="space-y-4">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-base font-medium text-gray-600 hover:text-blue-600 transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <Button variant="outline" className="w-full border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300" asChild>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </Link>
              </Button>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg transition-all duration-300" asChild>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Book Free Call</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
