export function TestimonialCard({
  quote,
  author,
}: {
  quote: string
  author: string
}) {
  return (
    <blockquote className="rounded bg-bp-surface p-4 text-white">
      <p className="mb-2 italic">“{quote}”</p>
      <footer className="text-right">— {author}</footer>
    </blockquote>
  )
}
