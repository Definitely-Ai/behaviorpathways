import { Card, CardContent } from '@/components/ui/card'

interface TestimonialCardProps {
  quote: string
  author: string
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <blockquote className="text-lg italic text-muted-foreground mb-4">
          "{quote}"
        </blockquote>
        <footer className="text-sm font-medium">- {author}</footer>
      </CardContent>
    </Card>
  )
}
