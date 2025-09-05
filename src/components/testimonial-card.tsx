import { Card, CardContent } from '@/components/ui/card'

interface TestimonialCardProps {
  quote: string
  author: string
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <Card className="glass-card animate-scaleIn group h-full border-0 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="p-8">
        <div className="flex items-start space-x-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 text-lg font-bold text-primary-foreground">
            {author.charAt(0)}
          </div>
          <div className="flex-1">
            <blockquote className="mb-4 text-lg leading-relaxed text-foreground transition-colors duration-300 group-hover:text-foreground">
              &ldquo;{quote}&rdquo;
            </blockquote>
            <footer className="text-sm font-semibold text-muted-foreground">
              - {author}
            </footer>
          </div>
        </div>
        <div className="absolute right-4 top-4 text-xl text-yellow-400 opacity-60">
          ⭐
        </div>
      </CardContent>
    </Card>
  )
}
