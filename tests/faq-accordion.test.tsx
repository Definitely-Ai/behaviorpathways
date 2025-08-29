import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FAQAccordion } from '@/components/faq-accordion'

const items = [{ question: 'Q1', answer: 'A1' }]

describe('FAQAccordion', () => {
  it('toggles content', () => {
    render(<FAQAccordion items={items} />)
    const btn = screen.getByText('Q1')
    expect(screen.queryByText('A1')).toBeNull()
    fireEvent.click(btn)
    expect(screen.getByText('A1')).toBeInTheDocument()
  })
})
