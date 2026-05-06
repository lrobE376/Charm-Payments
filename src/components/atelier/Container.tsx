// src/components/atelier/Container.tsx
import { cn } from '@/lib/utils'

export function Container({
  children,
  className,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  as?: 'div' | 'section' | 'main' | 'article'
}) {
  return (
    <Tag
      className={cn(
        'w-full mx-auto px-base md:px-lg',
        'max-w-container',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
