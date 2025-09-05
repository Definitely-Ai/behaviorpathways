import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Prose } from '@/components/prose'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getMDXContent } from '@/lib/mdx'
import { generateMetadata as generatePageMetadata } from '@/lib/utils'
import { formatDate } from '@/lib/utils'
import { Calendar, Tag, ArrowRight } from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog - ABA Therapy Insights & Resources',
  description:
    'Expert insights, practical tips, and inspiring stories for families navigating autism and communication challenges in Naples, Bonita Springs, and Collier County.',
})

export default function BlogPage() {
  const posts = getMDXContent('blog')

  return (
    <div className="py-12">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Blog' }]} />

        <div className="mx-auto max-w-6xl">
          <Prose>
            <h1>Expert Insights & Resources</h1>
            <p className="text-xl text-muted-foreground">
              Discover evidence-based strategies, inspiring success stories, and
              practical resources for families navigating autism and
              communication challenges in Naples, Bonita Springs, and Collier
              County.
            </p>
          </Prose>

          <div className="my-16">
            {posts.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground">
                    No blog posts yet. Check back soon!
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Card
                    key={post.slug}
                    className="glass-card group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <CardHeader className="pb-4">
                      <div className="mb-2 flex items-center justify-between">
                        {post.date && (
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="mr-1 h-3 w-3" />
                            {formatDate(post.date)}
                          </div>
                        )}
                        {post.featured && (
                          <Badge variant="secondary" className="text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg leading-tight transition-colors group-hover:text-primary">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                        {post.description}
                      </p>

                      {post.tags && (
                        <div className="mb-4 flex flex-wrap gap-1">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs"
                            >
                              <Tag className="mr-1 h-2 w-2" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}

                      <Link
                        href={`/blog/${post.slug}`}
                        className="group inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        Read full article
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="glass-card mt-16 rounded-xl p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Ready to Transform Your Child&apos;s Communication Journey?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
              Our expert ABA therapy services in Naples, Bonita Springs, and
              Collier County can help your family achieve the breakthroughs
              you&apos;re reading about.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get Started Today
              </Link>
              <Link
                href="/service-areas"
                className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-primary transition-colors hover:bg-primary/10"
              >
                View Service Areas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
