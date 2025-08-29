export function TestimonialCard({
  quote,
  author,
}: {
  quote: string
  author: string
}) {
  return (
    <blockquote className="rounded-2xl bg-gradient-to-br from-bp-surface/90 to-bp-bg/80 p-6 text-white shadow-3d border border-white/10 backdrop-blur-md animate-fade-in">
      <p className="mb-2 italic text-lg font-medium drop-shadow">“{quote}”</p>
      <footer className="text-right text-bp-primary font-heading font-semibold">— {author}</footer>
    </blockquote>
  )
}
