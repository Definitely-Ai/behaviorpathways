import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { AnnouncementBar } from '@/components/announcement-bar'
import { ThemeProvider } from '@/components/theme-provider'
import { generateOrganizationSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/siteConfig'
import { Analytics } from '@vercel/analytics/next'

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
    'ABA therapy Fort Myers Florida',
    'autism therapy Collier County',
    'autism therapy Lee County',
    'applied behavior analysis Bonita Springs',
    'applied behavior analysis Estero',
    'autism services Naples FL',
    'autism services Fort Myers FL',
    'ABA therapy Bonita Springs Florida',
    'ABA therapy Cape Coral Florida',
    'special needs therapy Naples',
    'special needs therapy Fort Myers',
    'autism communication skills Collier County',
    'autism communication skills Lee County',
    'parent training autism Naples',
    'parent training autism Fort Myers',
    'in-home ABA therapy Naples',
    'in-home ABA therapy Fort Myers',
    'school collaboration autism Naples',
    'school collaboration autism Fort Myers',
    'autism therapy Marco Island',
    'ABA services Estero Florida',
    'ABA services Cape Coral Florida',
    'autism support Naples Florida',
    'autism support Fort Myers Florida',
    'behavioral therapy Collier County',
    'behavioral therapy Lee County',
    'autism intervention Naples FL',
    'autism intervention Fort Myers FL',
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
        <Analytics />
      </body>
    </html>
  )
}
