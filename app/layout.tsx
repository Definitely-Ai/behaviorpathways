import './globals.css'
import '../styles/fonts.css'
import { Inter, Sora } from 'next/font/google'
import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ThemeToggle } from '@/components/theme-toggle'
import { site } from '@/content/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' })

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title: site.name,
    description: site.tagline,
    images: ['/og-image.png'],
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.tagline,
    images: ['/og-image.png'],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}> 
      <head>
        <meta name="theme-color" content="#0B1220" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-bp-bg text-white antialiased min-h-screen flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only absolute z-50 bg-bp-primary text-black px-4 py-2">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  )
}
