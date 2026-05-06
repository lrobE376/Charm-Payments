// src/components/atelier/SpecStrip.tsx
import { cn } from '@/lib/utils'

export interface SpecStripItem {
  label: string
  value: string
}

export interface SpecStripProps {
  items: SpecStripItem[]
  className?: string
}

export function SpecStrip({ items, className }: SpecStripProps) {
  return (
    <dl
      className={cn(
        'grid w-full',
        'grid-cols-2 sm:grid-cols-3 md:grid-cols-6',
        className,
      )}
      style={{ gridAutoRows: '1fr' }}
    >
      {items.map((item, i) => (
        <div
          key={`${item.label}-${i}`}
          className={cn(
            'flex flex-col justify-center px-2 py-[7px]',
            i > 0 && '[border-left-width:0.5px] border-black/15',
          )}
        >
          <dt
            className={cn(
              'font-atelierMono text-[10px] uppercase tracking-spec',
              'text-black/55',
            )}
          >
            {item.label}
          </dt>
          <dd
            className={cn(
              'font-atelierMono text-xs uppercase tracking-spec',
              'text-atelier-ink mt-0.5',
            )}
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
