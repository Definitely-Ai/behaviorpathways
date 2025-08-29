'use client'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

export function FAQAccordion({
  items,
}: {
  items: { question: string; answer: string }[]
}) {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <Accordion.Item
          key={i}
          value={String(i)}
          className="border-b border-bp-muted bg-bp-surface/60 rounded-xl shadow-3d my-2 animate-fade-in"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between py-4 text-left font-medium focus:outline-none focus:ring-2 focus:ring-bp-primary">
              {item.question}
              <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="pb-4 text-bp-muted">{item.answer}</Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
