// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-brand-dark/20 border-t-brand-dark animate-spin" />
        <p className="text-sm text-gray-400">Loading&hellip;</p>
      </div>
    </div>
  )
}
