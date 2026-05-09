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
        padding: '12px clamp(16px, 4vw, 32px)',
        borderBottom: '0.5px solid rgba(0,0,0,0.04)',
      }}
    >
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <span className="min-w-0 break-words">{issue}</span>
        <span className="hidden md:inline">{folio}</span>
        <span className="min-w-0 break-words">{filed}</span>
      </div>
    </div>
  )
}



