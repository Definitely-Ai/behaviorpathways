import { cn } from '@/lib/utils'

interface ProseProps {
  children: React.ReactNode
  className?: string
}

export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        'prose prose-gray max-w-none',
        'prose-headings:font-bold prose-headings:tracking-tight',
        'prose-h1:text-4xl prose-h1:lg:text-5xl',
        'prose-h2:text-3xl prose-h2:lg:text-4xl',
        'prose-h3:text-2xl prose-h3:lg:text-3xl',
        'prose-p:text-base prose-p:leading-relaxed prose-p:text-muted-foreground',
        'prose-a:text-primary prose-a:no-underline hover:prose-a:underline',
        'prose-strong:text-foreground prose-strong:font-semibold',
        'prose-ul:list-disc prose-ol:list-decimal',
        'prose-li:text-base prose-li:leading-relaxed prose-li:text-muted-foreground',
        'prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-muted-foreground',
        className
      )}
    >
      {children}
    </div>
  )
}
