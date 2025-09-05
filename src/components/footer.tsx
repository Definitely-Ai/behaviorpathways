import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg">
                <span className="text-sm font-bold text-white">BP</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Behavior Pathways
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              Independent communication starts here. Personalized ABA support
              that meets you at home, at school, and in the community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/approach"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                >
                  Our Approach
                </Link>
              </li>
              <li>
                <Link
                  href="/parent-training"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                >
                  Parent Training
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/resources"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                >
                  Resource Library
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-600" />
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                >
                  {siteConfig.links.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-600" />
                <a
                  href={`tel:${siteConfig.links.phone}`}
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                >
                  {siteConfig.links.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="text-gray-600">Serving local families</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <div className="text-sm text-gray-600">
              © 2024 Behavior Pathways. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm sm:justify-end sm:gap-6">
              <Link
                href="/privacy"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
              >
                Terms of Service
              </Link>
              <Link
                href="/accessibility"
                className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
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
