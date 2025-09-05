import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  author: string
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <Card className="glass-card animate-scaleIn group relative h-full border-0 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="p-8">
        {/* Quote Icon */}
        <div className="absolute left-6 top-6 opacity-10">
          <Quote className="h-8 w-8 text-primary" />
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 text-lg font-bold text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
            {author.charAt(0)}
          </div>
          <div className="flex-1">
            <blockquote className="mb-4 text-lg leading-relaxed text-foreground transition-colors duration-300 group-hover:text-foreground">
              {quote}
            </blockquote>
            <footer className="text-sm font-semibold text-muted-foreground">
              - {author}
            </footer>
          </div>
        </div>

        {/* Star Rating */}
        <div className="absolute right-6 top-6 flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
