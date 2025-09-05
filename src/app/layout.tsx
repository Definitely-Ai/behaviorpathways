import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AnnouncementBar } from '@/components/announcement-bar'
import { ThemeProvider } from '@/components/theme-provider'
import { generateOrganizationSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/siteConfig'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'ABA therapy Naples Florida',
    'autism therapy Collier County',
    'applied behavior analysis Bonita Springs',
    'autism services Naples FL',
    'ABA therapy Bonita Springs Florida',
    'special needs therapy Naples',
    'autism communication skills Collier County',
    'parent training autism Naples',
    'in-home ABA therapy Naples',
    'school collaboration autism Naples',
    'autism therapy Marco Island',
    'ABA services Estero Florida',
    'autism support Naples Florida',
    'behavioral therapy Collier County',
    'autism intervention Naples FL',
  ],
  authors: [{ name: 'Behavior Pathways' }],
  creator: 'Behavior Pathways',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema()

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-title" content="Behavior Pathways" />
        <meta name="theme-color" content="#71c1f2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <AnnouncementBar />
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
