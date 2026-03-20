import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  label: string
  value: string
  sub?: string
  icon: LucideIcon
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: string
  className?: string
}

export default function StatCard({ label, value, sub, icon: Icon, trend, trendValue, className }: StatCardProps) {
  return (
    <div className={cn('bg-white rounded-2xl p-6 border border-gray-100 shadow-sm', className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 font-medium">{label}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
          {trendValue && (
            <p
              className={cn(
                'text-xs font-medium mt-2',
                trend === 'up' && 'text-green-600',
                trend === 'down' && 'text-red-600',
                trend === 'neutral' && 'text-gray-500'
              )}
            >
              {trend === 'up' && '↑ '}
              {trend === 'down' && '↓ '}
              {trendValue}
            </p>
          )}
        </div>
        <div className="bg-brand-light p-3 rounded-xl">
          <Icon className="w-5 h-5 text-brand-dark" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
