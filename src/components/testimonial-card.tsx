import { Card, CardContent } from '@/components/ui/card'

interface TestimonialCardProps {
  quote: string
  author: string
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <Card className="group h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-8">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
            {author.charAt(0)}
          </div>
          <div className="flex-1">
            <blockquote className="text-lg text-gray-700 leading-relaxed mb-4 group-hover:text-gray-800 transition-colors duration-300">
              &ldquo;{quote}&rdquo;
            </blockquote>
            <footer className="text-sm font-semibold text-gray-600">- {author}</footer>
          </div>
        </div>
        <div className="absolute top-4 right-4 text-yellow-400 text-xl opacity-60">
          ⭐
        </div>
      </CardContent>
    </Card>
  )
}
