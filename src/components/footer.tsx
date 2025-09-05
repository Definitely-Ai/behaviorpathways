import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#71c1f2] to-[#8dd3f7] shadow-lg">
                <Image
                  src="/icon0.svg"
                  alt="Behavior Pathways Logo"
                  width={24}
                  height={24}
                  className="h-6 w-6 text-white"
                />
              </div>
              <span className="text-xl font-bold text-foreground">
                Behavior Pathways
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Independent ABA therapy services in Naples, Bonita Springs, and
              Collier County, Florida. Personalized support that meets you at
              home, at school, and in the community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/approach"
                  className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  Our Approach
                </Link>
              </li>
              <li>
                <Link
                  href="/parent-training"
                  className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  Parent Training
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/resources"
                  className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  Resource Library
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  {siteConfig.links.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href={`tel:${siteConfig.links.phone}`}
                  className="text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  {siteConfig.links.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  Serving Naples, Bonita Springs & Collier County
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2025 Behavior Pathways. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm sm:justify-end sm:gap-6">
              <Link
                href="/privacy"
                className="text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                Terms of Service
              </Link>
              <Link
                href="/accessibility"
                className="text-muted-foreground transition-colors duration-300 hover:text-primary"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
