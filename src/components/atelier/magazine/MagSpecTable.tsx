// src/components/atelier/magazine/MagSpecTable.tsx

export type MagSpecTableRow = {
  label: string
  value: string
}

export type MagSpecTableProps = {
  eyebrow?: string
  title?: string
  rows: MagSpecTableRow[]
  footnote?: string
}

export function MagSpecTable({ eyebrow, title, rows, footnote }: MagSpecTableProps) {
  return (
    <section className="bg-apple-canvas" style={{ padding: '100px 32px' }}>
      <div className="mx-auto" style={{ maxWidth: 720 }}>
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
            className="font-atelierSerif text-center"
            style={{
              fontSize: 'clamp(26px, 3vw, 32px)',
              lineHeight: 1.05,
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: '#1D1D1F',
              marginBottom: 48,
            }}
          >
            {title}
          </h2>
        ) : null}

        <dl
          className="grid"
          style={{
            gridTemplateColumns: '200px 1fr',
            columnGap: 48,
            borderTop: '0.5px solid rgba(0,0,0,0.08)',
          }}
        >
          {rows.map((row) => (
            <div
              key={row.label}
              className="contents"
            >
              <dt
                className="font-atelierMono"
                style={{
                  alignSelf: 'baseline',
                  paddingTop: 18,
                  paddingBottom: 18,
                  borderBottom: '0.5px solid rgba(0,0,0,0.08)',
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'rgba(0,0,0,0.55)',
                }}
              >
                {row.label}
              </dt>
              <dd
                className="font-atelierSerif"
                style={{
                  alignSelf: 'baseline',
                  paddingTop: 18,
                  paddingBottom: 18,
                  borderBottom: '0.5px solid rgba(0,0,0,0.08)',
                  margin: 0,
                  fontSize: 18,
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: '#1D1D1F',
                }}
              >
                {row.value}
              </dd>
            </div>
          ))}
        </dl>

        {footnote ? (
          <p
            className="text-center mx-auto font-stripeSans italic"
            style={{
              maxWidth: 600,
              marginTop: 32,
              fontSize: 12,
              color: 'rgba(0,0,0,0.5)',
            }}
          >
            {footnote}
          </p>
        ) : null}
      </div>
    </section>
  )
}
