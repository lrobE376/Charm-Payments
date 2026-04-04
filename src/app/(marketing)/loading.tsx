// src/app/(marketing)/loading.tsx
export default function MarketingLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-brand-dark h-[420px] md:h-[500px]" />

      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-10">
        <div className="space-y-4 max-w-2xl">
          <div className="h-3 w-20 bg-gray-200 rounded-full" />
          <div className="h-8 w-3/4 bg-gray-200 rounded-lg" />
          <div className="h-5 w-2/3 bg-gray-200 rounded" />
          <div className="h-5 w-1/2 bg-gray-200 rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-48 bg-gray-100 rounded-2xl" />
          ))}
        </div>

        <div className="space-y-3 max-w-xl">
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-5/6 bg-gray-100 rounded" />
          <div className="h-4 w-4/6 bg-gray-100 rounded" />
        </div>
      </div>
    </div>
  )
}
