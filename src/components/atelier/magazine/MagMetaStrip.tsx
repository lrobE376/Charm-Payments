// src/components/atelier/magazine/MagMetaStrip.tsx

export type MagMetaStripProps = {
  issue: string
  folio: string
  filed: string
}

export function MagMetaStrip({ issue, folio, filed }: MagMetaStripProps) {
  return (
    <div
      className="font-stripeSans text-[10px] font-medium uppercase text-black/45 [letter-spacing:0.12em]"
      style={{
        padding: '12px 32px',
        borderBottom: '0.5px solid rgba(0,0,0,0.04)',
      }}
    >
      <div className="flex items-center justify-between gap-4">
        <span>{issue}</span>
        <span className="hidden md:inline">{folio}</span>
        <span>{filed}</span>
      </div>
    </div>
  )
}



