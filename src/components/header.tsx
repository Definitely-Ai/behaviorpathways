'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { siteConfig } from '@/lib/siteConfig'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="glass-card sticky top-0 z-50 w-full border-b border-border/20 shadow-lg backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center space-x-4">
          <div className="relative">
            <div className="group-hover:animate-glow flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#71c1f2] via-[#4a9fd1] to-[#8dd3f7] shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
              <Image
                src="/icon0.svg"
                alt="Behavior Pathways Logo"
                width={32}
                height={32}
                className="h-8 w-8 text-white transition-transform duration-300 group-hover:rotate-12"
              />
            </div>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#71c1f2] via-[#4a9fd1] to-[#8dd3f7] opacity-0 blur transition-all duration-300 group-hover:opacity-30"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
              Behavior Pathways
            </span>
            <span className="-mt-1 text-xs font-medium text-muted-foreground">
              ABA Services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-1 lg:flex">
          {siteConfig.navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative rounded-xl px-4 py-2 text-sm font-semibold text-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/10 hover:text-primary"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInDown 0.6s ease-out forwards',
              }}
            >
              <span className="relative z-10 transition-all duration-300 group-hover:translate-x-0.5">
                {item.name}
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-primary/20 opacity-0 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/80 transition-all duration-300 group-hover:left-0 group-hover:w-full"></div>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center space-x-4 lg:flex">
          <ThemeToggle />
          <Button
            size="sm"
            className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 px-8 py-2.5 text-primary-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:from-primary/90 hover:to-primary hover:shadow-xl hover:shadow-primary/30"
            asChild
          >
            <Link href="/contact" className="relative z-10 flex items-center">
              <Phone className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <span className="font-semibold">Book Free Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-xl hover:bg-primary/10 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative h-6 w-6">
            <span
              className={`absolute left-0 top-1 h-0.5 w-6 bg-foreground transition-all duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`}
            ></span>
            <span
              className={`absolute left-0 top-3 h-0.5 w-6 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`absolute left-0 top-5 h-0.5 w-6 bg-foreground transition-all duration-300 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            ></span>
          </div>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="container space-y-8 py-8">
            <div className="grid grid-cols-2 gap-4">
              {siteConfig.navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group rounded-xl bg-muted p-4 text-center transition-all duration-300 hover:scale-105 hover:bg-primary/10 hover:shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'slideInRight 0.5s ease-out forwards',
                  }}
                >
                  <span className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="space-y-4 border-t border-border pt-6">
              <div className="flex justify-center">
                <ThemeToggle />
              </div>
              <Button
                className="group relative w-full overflow-hidden bg-gradient-to-r from-primary to-primary/80 py-3 text-primary-foreground shadow-lg transition-all duration-300 hover:from-primary/90 hover:to-primary hover:shadow-xl hover:shadow-primary/30"
                asChild
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="relative z-10 flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-base font-semibold">
                    Book Free Call
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
