import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin } from 'lucide-react'

interface ProviderCardProps {
  name: string
  title: string
  bio: string
  credentials: string[]
  image?: string
  email: string
  phone: string
  serviceArea: string
}

export function ProviderCard({
  name,
  title,
  bio,
  credentials,
  image,
  email,
  phone,
  serviceArea,
}: ProviderCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="text-center">
        <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <div className="text-4xl font-bold text-primary">
              {name.split(' ').map(n => n[0]).join('')}
            </div>
          )}
        </div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-muted-foreground">{title}</p>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {credentials.map((credential, index) => (
            <Badge key={index} variant="secondary">
              {credential}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground leading-relaxed">{bio}</p>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <a
              href={`mailto:${email}`}
              className="text-primary hover:underline"
            >
              {email}
            </a>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <a
              href={`tel:${phone}`}
              className="text-primary hover:underline"
            >
              {phone}
            </a>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{serviceArea}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
