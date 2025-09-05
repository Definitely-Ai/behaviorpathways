'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-border">
      <Button
        variant="ghost"
        className="h-auto w-full justify-between p-6 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="ml-2 h-4 w-4 flex-shrink-0" />
        ) : (
          <ChevronDown className="ml-2 h-4 w-4 flex-shrink-0" />
        )}
      </Button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="leading-relaxed text-muted-foreground">{answer}</p>
        </div>
      )}
    </div>
  )
}

interface FAQProps {
  faqs: Array<{ question: string; answer: string }>
}

export function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-center text-3xl font-bold">
        Frequently Asked Questions
      </h2>
      <div className="mx-auto max-w-3xl">
        <div className="bg-card rounded-lg border">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
