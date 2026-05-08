// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen animate-pulse bg-apple-canvas">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-5">
            <div className="h-5 w-48 rounded-full bg-black/10" />
            <div className="space-y-3">
              <div className="h-12 w-full max-w-2xl rounded bg-black/10" />
              <div className="h-12 w-11/12 max-w-xl rounded bg-black/10" />
              <div className="h-12 w-10/12 max-w-lg rounded bg-black/10" />
            </div>
            <div className="h-5 w-full max-w-xl rounded bg-black/10" />
            <div className="h-5 w-10/12 max-w-lg rounded bg-black/10" />
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="h-12 w-40 rounded-full bg-black/10" />
              <div className="h-12 w-32 rounded-full bg-black/10" />
            </div>
          </div>
          <div className="hidden h-[360px] rounded-lg bg-black/10 lg:block" />
        </div>
      </div>
    </div>
  )
}



