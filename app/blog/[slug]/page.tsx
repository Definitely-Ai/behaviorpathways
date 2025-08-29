import { notFound } from 'next/navigation'
import { posts } from '@/content/blog'
import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) notFound()
  const Content = post.component
  return (
    <>
      <PageHero title={post.title} />
      <Section className="mx-auto max-w-3xl space-y-4">
        <Content />
      </Section>
    </>
  )
}
