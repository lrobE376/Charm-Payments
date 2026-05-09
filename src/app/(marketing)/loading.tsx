// src/app/(marketing)/loading.tsx
export default function MarketingLoading() {
  return (
    <div className="animate-pulse bg-apple-canvas">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:px-8">
        <div className="space-y-4">
          <div className="h-3 w-24 rounded-full bg-black/10" />
          <div className="h-11 w-full max-w-2xl rounded bg-black/10" />
          <div className="h-11 w-11/12 max-w-xl rounded bg-black/10" />
          <div className="h-5 w-3/4 max-w-lg rounded bg-black/10" />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-44 rounded-[20px] bg-black/[0.08]" />
          ))}
        </div>

        <div className="mt-10 space-y-3">
          <div className="h-4 w-full max-w-2xl rounded bg-black/[0.08]" />
          <div className="h-4 w-5/6 max-w-xl rounded bg-black/[0.08]" />
          <div className="h-4 w-4/6 max-w-lg rounded bg-black/[0.08]" />
        </div>
      </div>
    </div>
  )
}



