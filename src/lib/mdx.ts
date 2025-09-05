import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export interface MDXFrontmatter {
  title: string
  description: string
  ogImage?: string
  date?: string
  published?: boolean
  featured?: boolean
  tags?: string[]
  author?: string
}

export interface MDXContent extends MDXFrontmatter {
  slug: string
  content: string
}

export function getMDXContent(type: 'pages' | 'blog'): MDXContent[] {
  const directory = path.join(contentDirectory, type)

  if (!fs.existsSync(directory)) {
    return []
  }

  const fileNames = fs.readdirSync(directory)
  const allContent = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(directory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        content,
        ...data,
      } as MDXContent
    })

  // Filter out unpublished content
  const publishedContent = allContent.filter((item) => item.published !== false)

  // Sort by date if available, otherwise by title
  return publishedContent.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
    return a.title.localeCompare(b.title)
  })
}

export function getMDXContentBySlug(
  type: 'pages' | 'blog',
  slug: string
): MDXContent | null {
  const allContent = getMDXContent(type)
  return allContent.find((item) => item.slug === slug) || null
}

export function getAllSlugs(type: 'pages' | 'blog'): string[] {
  const allContent = getMDXContent(type)
  return allContent.map((item) => item.slug)
}
