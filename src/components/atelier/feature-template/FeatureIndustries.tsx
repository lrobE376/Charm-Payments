// src/components/atelier/feature-template/FeatureIndustries.tsx
import { Container } from '@/components/atelier/Container'
import { EyebrowTag } from '@/components/atelier/EyebrowTag'
import { cn } from '@/lib/utils'

export type IndustryItem = {
  figLabel: string
  title: string
  description: string
}

export type FeatureIndustriesProps = {
  eyebrow: string
  title: string
  items: IndustryItem[]
}

function renderTitle(title: string) {
  if (!title.includes('{')) return title
  const parts: React.ReactNode[] = []
  const regex = /\{([^}]+)\}/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0
  while ((match = regex.exec(title)) !== null) {
    if (match.index > lastIndex) parts.push(title.slice(lastIndex, match.index))
    parts.push(
      <em key={key++} className="italic text-atelier-gold">
        {match[1]}
      </em>,
    )
    lastIndex = regex.lastIndex
  }
  if (lastIndex < title.length) parts.push(title.slice(lastIndex))
  return parts
}

export function FeatureIndustries({ eyebrow, title, items }: FeatureIndustriesProps) {
  return (
    <section className="bg-atelier-forest-deep text-atelier-cream py-12 md:py-16 px-lg">
      <Container>
        <div className="mb-2xl">
          <EyebrowTag section="§03" label={eyebrow} variant="gold" />
          <h2
            className={cn(
              'mt-base font-atelierSerif text-3xl md:text-4xl font-medium',
              'leading-tight tracking-[-0.025em] text-atelier-cream',
              'max-w-3xl',
            )}
          >
            {renderTitle(title)}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-base">
          {items.map((item) => (
            <div
              key={item.title}
              className={cn(
                'bg-white/[0.04] p-base rounded-atelierSm',
                '[border-width:0.5px] border-atelier-gold/[0.18]',
              )}
            >
              <div className="font-atelierMono text-[10px] uppercase tracking-label text-atelier-gold">
                {item.figLabel}
              </div>
              <h3 className="mt-xs font-atelierSerif text-base font-medium text-atelier-cream leading-tight">
                {item.title}
              </h3>
              <p className="mt-xs font-atelierSans text-xs text-atelier-cream/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
