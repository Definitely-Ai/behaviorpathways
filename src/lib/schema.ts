import { siteConfig } from './siteConfig'

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.links.phone,
      contactType: 'customer service',
      email: siteConfig.links.email,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      addressCountry: 'US',
      postalCode: siteConfig.location.zipCode,
    },
    sameAs: Object.values(siteConfig.social),
  }
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    telephone: siteConfig.links.phone,
    email: siteConfig.links.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.state,
      addressCountry: 'US',
      postalCode: siteConfig.location.zipCode,
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.location.coordinates.lat,
        longitude: siteConfig.location.coordinates.lng,
      },
      geoRadius: '50000',
    },
    areaServed: siteConfig.location.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
      addressRegion: siteConfig.location.state,
      addressCountry: 'US',
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'ABA Services',
      itemListElement: siteConfig.services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
        position: index + 1,
      })),
    },
  }
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  url,
  author = 'Valentina',
}: {
  title: string
  description: string
  datePublished: string
  dateModified?: string
  url: string
  author?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    url,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.svg`,
      },
    },
  }
}
