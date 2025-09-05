import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, FileText, Download } from 'lucide-react'

interface ResourceCardProps {
  title: string
  description: string
  type: string
  href: string
}

export function ResourceCard({ title, description, type, href }: ResourceCardProps) {
  const isExternal = href.startsWith('http')
  const isPDF = href.endsWith('.pdf')
  
  const getIcon = () => {
    if (isPDF) return <Download className="h-4 w-4" />
    if (isExternal) return <ExternalLink className="h-4 w-4" />
    return <FileText className="h-4 w-4" />
  }

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge variant="secondary">{type}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center space-x-2 text-primary hover:underline"
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
        >
          {getIcon()}
          <span>{isPDF ? 'Download' : 'View'}</span>
        </Link>
      </CardContent>
    </Card>
  )
}
