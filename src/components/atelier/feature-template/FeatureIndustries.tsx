// src/components/atelier/feature-template/FeatureIndustries.tsx
import { Container } from '@/components/atelier/Container'
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
      <em key={key++} className="italic text-atelier-forest">
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
    <section className="bg-apple-canvas" style={{ padding: '90px 32px' }}>
      <Container>
        <div className="mb-2xl">
          {(() => {
            const isSection = eyebrow.trim().startsWith('§')
            const eyebrowClass = isSection
              ? 'font-atelierMono text-xs uppercase tracking-label text-atelier-gold'
              : 'font-stripeSans'
            const eyebrowStyle: React.CSSProperties = isSection
              ? {}
              : { fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', color: 'rgba(0,0,0,0.5)' }
            return (
              <div className={eyebrowClass} style={eyebrowStyle}>
                {eyebrow}
              </div>
            )
          })()}
          <h2
            className={cn(
              'mt-base font-atelierSerif text-3xl md:text-4xl font-medium',
              'leading-tight tracking-[-0.025em] text-apple-ink',
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
              className="bg-white p-base rounded-atelierSm"
              style={{ border: '0.5px solid rgba(0,0,0,0.08)' }}
            >
              <div
                className="font-stripeSans"
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  color: 'rgba(0,0,0,0.45)',
                }}
              >
                {item.figLabel}
              </div>
              <h3 className="mt-xs font-atelierSerif text-base font-medium text-apple-ink leading-tight">
                {item.title}
              </h3>
              <p
                className="mt-xs font-stripeSans text-xs leading-relaxed"
                style={{ color: 'rgba(0,0,0,0.65)' }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}



