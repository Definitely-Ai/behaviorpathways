import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <Card className="group h-full hover:shadow-xl transition-all duration-300 border-0 glass-card hover:-translate-y-1 animate-scaleIn">
      <CardHeader className="pb-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#71c1f2] to-[#8dd3f7] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#71c1f2] transition-colors duration-300">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{description}</p>
      </CardContent>
    </Card>
  )
}
