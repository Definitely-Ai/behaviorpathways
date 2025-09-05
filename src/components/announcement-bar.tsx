import Link from 'next/link'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/siteConfig'

export function AnnouncementBar() {
  if (!siteConfig.announcement.enabled) {
    return null
  }

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">{siteConfig.announcement.message}</span>
            {siteConfig.announcement.link && (
              <Link
                href={siteConfig.announcement.link}
                className="text-sm underline hover:no-underline"
              >
                Learn more
              </Link>
            )}
          </div>
          <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
