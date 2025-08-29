import Link from 'next/link'
import { site } from '@/content/site'

export function Footer() {
  return (
    <footer className="bg-bp-surface text-bp-muted py-8 mt-12 shadow-3d border-t border-bp-bg/40">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-heading text-lg text-bp-primary mb-2">{site.name}</h3>
          <p>{site.tagline}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p>{site.contact.city}, {site.contact.state}</p>
          <p>{site.contact.phone}</p>
          <p>
            <a href={`mailto:${site.contact.email}`} className="hover:underline">{site.contact.email}</a>
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Service Areas</h4>
          <ul>
            {site.areasServed.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/accessibility">Accessibility</Link></li>
          </ul>
          <div className="flex gap-2 mt-2">
            {site.social.instagram && <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">IG</a>}
            {site.social.facebook && <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">FB</a>}
            {site.social.linkedin && <a href={site.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">IN</a>}
          </div>
        </div>
      </div>
      <div className="text-center text-xs mt-8 text-bp-muted">
        &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}
