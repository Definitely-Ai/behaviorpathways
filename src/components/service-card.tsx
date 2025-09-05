import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <Card className="glass-card animate-scaleIn group h-full border-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardHeader className="pb-4">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Icon className="h-8 w-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
