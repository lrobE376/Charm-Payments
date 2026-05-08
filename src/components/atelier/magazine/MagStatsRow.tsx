// src/components/atelier/magazine/MagStatsRow.tsx

export type MagStatsRowStat = {
  num: string
  label: string
  sublabel?: string
}

export type MagStatsRowProps = {
  eyebrow?: string
  title?: string
  stats: MagStatsRowStat[]
}

export function MagStatsRow({ eyebrow, title, stats }: MagStatsRowProps) {
  if (stats.length === 0) return null
  const desktopCols = Math.min(stats.length, 4)

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
              marginBottom: 64,
              maxWidth: 720,
            }}
          >
            {title}
          </h2>
        ) : null}

        <div
          className="grid gap-x-8 gap-y-12 mag-stats-grid"
          style={{
            gridTemplateColumns: `repeat(${desktopCols}, minmax(0, 1fr))`,
            borderTop: stats.length > 1 ? '0.5px solid rgba(0,0,0,0.08)' : undefined,
            paddingTop: stats.length > 1 ? 48 : 0,
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={`${stat.num}-${i}`}
              className="text-center"
            >
              <div
                className="font-atelierSerif"
                style={{
                  fontSize: 'clamp(40px, 5vw, 56px)',
                  fontWeight: 500,
                  lineHeight: 1,
                  color: '#1D1D1F',
                  letterSpacing: '-0.025em',
                }}
              >
                {stat.num}
              </div>
              <div
                className="font-stripeSans mx-auto"
                style={{
                  marginTop: 12,
                  fontSize: 14,
                  fontWeight: 500,
                  color: 'rgba(0,0,0,0.7)',
                  maxWidth: 200,
                }}
              >
                {stat.label}
              </div>
              {stat.sublabel ? (
                <div
                  className="font-stripeSans mx-auto"
                  style={{
                    marginTop: 6,
                    fontSize: 12,
                    fontWeight: 400,
                    color: 'rgba(0,0,0,0.5)',
                    maxWidth: 200,
                  }}
                >
                  {stat.sublabel}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .mag-stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 640px) {
          .mag-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}



