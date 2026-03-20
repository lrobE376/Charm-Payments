import { Bell } from 'lucide-react'
import type { Merchant } from '@/types'

export default function DashboardHeader({ merchant }: { merchant: Merchant }) {
  return (
    <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
      <div>
        <p className="text-sm font-semibold text-gray-900">{merchant.business_name}</p>
        <p className="text-xs text-gray-400">
          Plan: {merchant.plan.charAt(0).toUpperCase() + merchant.plan.slice(1)}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button type="button" className="p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="View notifications">
          <Bell className="w-4 h-4 text-gray-600" aria-hidden="true" />
        </button>
        <div className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center text-white text-xs font-bold">
          {merchant.business_name.charAt(0)}
        </div>
      </div>
    </header>
  )
}
