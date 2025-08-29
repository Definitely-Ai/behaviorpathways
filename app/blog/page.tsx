import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'
import { posts } from '@/content/blog'

export default function Page() {
  return (
    <>
      <PageHero title="Blog" />
      <Section containerClass="max-w-3xl space-y-8">
        <div className="grid gap-8">
          {posts.map((p, i) => (
            <article
              key={p.slug}
              className="rounded-2xl bg-bp-surface/80 shadow-3d p-6 animate-fade-in motion-safe:transition-transform motion-safe:hover:scale-105"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <h2 className="font-heading text-2xl text-bp-primary mb-1">
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              </h2>
              <p className="text-sm text-bp-muted mb-2">{p.date}</p>
              <p>{p.excerpt}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
