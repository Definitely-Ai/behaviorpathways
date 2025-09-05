import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

export function generateMetadata({
  title,
  description,
  ogImage,
  url,
}: {
  title: string
  description: string
  ogImage?: string
  url?: string
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://behaviorpathways.com'
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl
  const imageUrl = ogImage ? `${siteUrl}${ogImage}` : `${siteUrl}/og.jpg`

  return {
    title: `${title} | Behavior Pathways`,
    description,
    openGraph: {
      title: `${title} | Behavior Pathways`,
      description,
      url: fullUrl,
      siteName: 'Behavior Pathways',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Behavior Pathways`,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}
