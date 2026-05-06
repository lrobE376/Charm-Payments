// src/components/atelier/magazine/MagPullQuoteRow.tsx
import { renderTitle } from './_renderTitle'

export type MagPullQuoteRowItem = {
  quote: string
  name: string
  role?: string
  location?: string
  verified?: boolean
  verifiedDate?: string
}

export type MagPullQuoteRowProps = {
  eyebrow?: string
  title?: string
  items: MagPullQuoteRowItem[]
}

export function MagPullQuoteRow({ eyebrow, title, items }: MagPullQuoteRowProps) {
  if (items.length === 0) return null
  const cols = Math.min(items.length, 3)

  return (
    <section className="bg-apple-canvas" style={{ padding: '100px 32px' }}>
      <div className="mx-auto" style={{ maxWidth: 1280 }}>
        {eyebrow ? (
          <div
            className="font-stripeSans text-center"
            style={{
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.06em',
              color: 'rgba(0,0,0,0.5)',
              marginBottom: 14,
            }}
          >
            {eyebrow}
          </div>
        ) : null}

        {title ? (
          <h2
            className="font-atelierSerif text-center mx-auto"
            style={{
              fontSize: 'clamp(26px, 3vw, 32px)',
              lineHeight: 1.05,
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: '#1D1D1F',
              marginBottom: 56,
              maxWidth: 720,
            }}
          >
            {title}
          </h2>
        ) : null}

        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          }}
        >
          {items.map((item, i) => (
            <article key={`${item.name}-${i}`} className="bg-transparent">
              <span
                aria-hidden
                className="font-atelierSerif"
                style={{
                  display: 'block',
                  fontSize: 36,
                  lineHeight: 0.6,
                  color: '#BD9952',
                  marginBottom: 8,
                  fontWeight: 500,
                }}
              >
                &ldquo;
              </span>

              <p
                className="font-atelierSerif"
                style={{
                  margin: 0,
                  fontSize: 20,
                  fontWeight: 400,
                  lineHeight: 1.35,
                  letterSpacing: '-0.005em',
                  color: '#1D1D1F',
                  marginBottom: 24,
                }}
              >
                {renderTitle(item.quote)}
              </p>

              <div
                style={{
                  paddingTop: 14,
                  borderTop: '0.5px solid rgba(0,0,0,0.15)',
                }}
              >
                <div
                  className="font-atelierSerif"
                  style={{
                    fontSize: 17,
                    fontWeight: 500,
                    color: '#1D1D1F',
                  }}
                >
                  {item.name}
                </div>
                {item.role || item.location ? (
                  <div
                    className="font-stripeSans"
                    style={{
                      fontSize: 13,
                      color: 'rgba(0,0,0,0.55)',
                      marginTop: 4,
                    }}
                  >
                    {[item.role, item.location].filter(Boolean).join(' · ')}
                  </div>
                ) : null}
                {item.verified ? (
                  <div
                    className="font-stripeSans"
                    style={{
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      color: 'rgba(0,0,0,0.4)',
                      marginTop: 14,
                      textTransform: 'uppercase',
                    }}
                  >
                    Verified{item.verifiedDate ? ` · ${item.verifiedDate}` : ''}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
