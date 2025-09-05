import { Sparkles, Heart, Star } from 'lucide-react'

export function VisualSeparator() {
  return (
    <div className="relative py-16">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="flex items-center space-x-4 rounded-full bg-background px-6 py-3 shadow-lg">
          <Sparkles className="h-5 w-5 animate-pulse text-primary" />
          <Heart
            className="h-4 w-4 animate-pulse text-primary"
            style={{ animationDelay: '0.5s' }}
          />
          <Star
            className="h-5 w-5 animate-pulse text-primary"
            style={{ animationDelay: '1s' }}
          />
        </div>
      </div>
    </div>
  )
}
