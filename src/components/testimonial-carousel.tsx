'use client'

import { useState, useEffect } from 'react'
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TestimonialCard } from '@/components/testimonial-card'
import { siteConfig } from '@/lib/siteConfig'

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === siteConfig.testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? siteConfig.testimonials.length - 1 : currentIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === siteConfig.testimonials.length - 1 ? 0 : currentIndex + 1
    )
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-center text-2xl font-bold text-foreground sm:text-left sm:text-3xl">
          What families say
        </h2>
        <div className="flex items-center justify-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={togglePlayPause}
            aria-label={isPlaying ? 'Pause testimonials' : 'Play testimonials'}
            className="h-10 w-10"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            aria-label="Previous testimonial"
            className="h-10 w-10"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            aria-label="Next testimonial"
            className="h-10 w-10"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {siteConfig.testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-2">
        {siteConfig.testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-muted'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
