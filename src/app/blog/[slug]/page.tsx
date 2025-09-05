import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Prose } from '@/components/prose'
import { getMDXContentBySlug, getAllSlugs } from '@/lib/mdx'
import { generateMetadata as generatePageMetadata } from '@/lib/utils'
import { generateArticleSchema } from '@/lib/schema'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getAllSlugs('blog')
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getMDXContentBySlug('blog', params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return generatePageMetadata({
    title: post.title,
    description: post.description,
    ogImage: post.ogImage,
  })
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getMDXContentBySlug('blog', params.slug)

  if (!post) {
    notFound()
  }

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    datePublished: post.date || new Date().toISOString(),
    url: `/blog/${params.slug}`,
  })

  return (
    <div className="py-12">
      <div className="container">
        <Breadcrumbs items={[
          { label: 'Blog', href: '/blog' },
          { label: post.title }
        ]} />
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>

          <Prose>
            <h1>{post.title}</h1>
            {post.date && (
              <p className="text-muted-foreground text-lg">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            )}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </Prose>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(articleSchema),
            }}
          />
        </div>
      </div>
    </div>
  )
}
