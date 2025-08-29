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
          {posts.map((p) => (
            <article key={p.slug}>
              <h2 className="font-heading text-2xl">
                <Link href={`/blog/[post]/${p.slug}`}>{p.title}</Link>
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
