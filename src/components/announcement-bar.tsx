import Link from 'next/link'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/siteConfig'

export function AnnouncementBar() {
  if (!siteConfig.announcement.enabled) {
    return null
  }

  return (
    <div className="bg-gradient-to-r from-[#71c1f2] to-[#4a9fd1] text-white">
      <div className="container py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-semibold">
              ✨ {siteConfig.announcement.message}
            </span>
            {siteConfig.announcement.link && (
              <Link
                href={siteConfig.announcement.link}
                className="text-sm font-medium underline transition-all duration-300 hover:text-[#8dd3f7] hover:no-underline"
              >
                Learn more →
              </Link>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-white transition-colors duration-300 hover:bg-white/10"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
