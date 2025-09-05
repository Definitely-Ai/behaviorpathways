import { cn } from '@/lib/utils'

interface ProseProps {
  children: React.ReactNode
  className?: string
}

export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        'prose max-w-none',
        'prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground',
        'prose-h1:text-4xl prose-h1:text-foreground prose-h1:lg:text-5xl',
        'prose-h2:text-3xl prose-h2:text-foreground prose-h2:lg:text-4xl',
        'prose-h3:text-2xl prose-h3:text-foreground prose-h3:lg:text-3xl',
        'prose-h4:text-xl prose-h4:text-foreground prose-h4:lg:text-2xl',
        'prose-h5:text-lg prose-h5:text-foreground prose-h5:lg:text-xl',
        'prose-h6:text-base prose-h6:text-foreground prose-h6:lg:text-lg',
        'prose-p:text-base prose-p:leading-relaxed prose-p:text-foreground',
        'prose-a:text-primary prose-a:no-underline hover:prose-a:underline',
        'prose-strong:font-semibold prose-strong:text-foreground',
        'prose-ol:list-decimal prose-ul:list-disc',
        'prose-li:text-base prose-li:leading-relaxed prose-li:text-foreground',
        'prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground',
        'prose-code:rounded prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:text-sm prose-code:text-foreground',
        'prose-pre:bg-muted prose-pre:text-foreground',
        className
      )}
    >
      {children}
    </div>
  )
}
