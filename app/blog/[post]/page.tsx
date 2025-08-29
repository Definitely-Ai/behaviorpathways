import { notFound } from 'next/navigation'
import { posts } from '@/content/blog'
import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'

export async function generateStaticParams() {
  return posts.map((p) => ({ post: p.slug }))
}

export default function Page({ params }: { params: { post: string } }) {
  const post = posts.find((p) => p.slug === params.post)
  if (!post) notFound()
  const Content = post.component
  return (
    <>
      <PageHero title={post.title} />
      <Section containerClass="max-w-3xl space-y-4">
        <Content />
      </Section>
    </>
  )
}
