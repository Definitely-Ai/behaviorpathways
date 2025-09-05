import Link from 'next/link'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/siteConfig'

export function AnnouncementBar() {
  if (!siteConfig.announcement.enabled) {
    return null
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-semibold">✨ {siteConfig.announcement.message}</span>
            {siteConfig.announcement.link && (
              <Link
                href={siteConfig.announcement.link}
                className="text-sm underline hover:no-underline font-medium transition-all duration-300 hover:text-yellow-200"
              >
                Learn more →
              </Link>
            )}
          </div>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 transition-colors duration-300">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
