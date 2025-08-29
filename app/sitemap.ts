import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000')
  const routes = [
    '',
    'why-us',
    'services',
    'approach',
    'parent-training',
    'faqs',
    'testimonials',

    'contact',
    'privacy',
    'terms',
    'accessibility',
  ]
  const pages = routes.map((p) => ({
    url: `${base}/${p}`,
    lastModified: new Date(),
  }))
  return pages
}
