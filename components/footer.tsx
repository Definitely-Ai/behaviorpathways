import Link from 'next/link'
import { site } from '@/content/site'

export function Footer() {
  return (
    <footer className="bg-bp-surface text-sm text-white">
      <div className="mx-auto grid max-w-5xl gap-6 p-6 md:grid-cols-3">
        <div>
          <h2 className="mb-2 font-heading">Contact</h2>
          <p>
            {site.contact.city}, {site.contact.state}
          </p>
          <p>{site.contact.phone}</p>
          <p>{site.contact.email}</p>
        </div>
        <div>
          <h2 className="mb-2 font-heading">Service areas</h2>
          <ul>
            {site.areasServed.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-2 font-heading">Quick links</h2>
          <ul className="space-y-1">
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/terms">Terms</Link>
            </li>
            <li>
              <Link href="/accessibility">Accessibility</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="pb-4 text-center">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  )
}
