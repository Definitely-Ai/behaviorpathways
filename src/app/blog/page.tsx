import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Prose } from '@/components/prose'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getMDXContent } from '@/lib/mdx'
import { generateMetadata as generatePageMetadata } from '@/lib/utils'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog',
  description: 'Insights, tips, and resources for families on their communication journey.',
})

export default function BlogPage() {
  const posts = getMDXContent('blog')

  return (
    <div className="py-12">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Blog' }]} />
        
        <div className="max-w-4xl mx-auto">
          <Prose>
            <h1>Blog</h1>
            <p className="text-xl text-muted-foreground">
              Insights, tips, and resources for families on their communication journey.
            </p>
          </Prose>

          <div className="my-16 space-y-8">
            {posts.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
                </CardContent>
              </Card>
            ) : (
              posts.map((post) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    {post.date && (
                      <p className="text-sm text-muted-foreground">
                        {formatDate(post.date)}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.description}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary hover:underline mt-4"
                    >
                      Read more →
                    </Link>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
