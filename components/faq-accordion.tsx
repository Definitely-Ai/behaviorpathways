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
          className="border-b border-bp-muted"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between py-4 text-left font-medium">
              {item.question}
              <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="pb-4">{item.answer}</Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
