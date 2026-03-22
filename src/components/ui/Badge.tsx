import { cn } from '@/lib/utils'

interface BadgeProps {
  status: string
  className?: string
}

const statusStyles: Record<string, string> = {
  approved: 'bg-green-100 text-green-800',
  settled: 'bg-green-100 text-green-800',
  won: 'bg-green-100 text-green-800',
  deposited: 'bg-green-100 text-green-800',
  active: 'bg-green-100 text-green-800',
  new: 'bg-blue-100 text-blue-800',
  contacted: 'bg-indigo-100 text-indigo-800',
  qualified: 'bg-cyan-100 text-cyan-800',
  proposal: 'bg-purple-100 text-purple-800',
  lost: 'bg-red-100 text-red-800',
  converted: 'bg-emerald-100 text-emerald-900',
  draft: 'bg-gray-100 text-gray-700',
  pending_review: 'bg-yellow-100 text-yellow-800',
  suspended: 'bg-orange-100 text-orange-800',
  closed: 'bg-gray-100 text-gray-600',
  in_progress: 'bg-amber-100 text-amber-900',
  resolved: 'bg-green-100 text-green-800',
  normal: 'bg-gray-100 text-gray-800',
  high: 'bg-orange-100 text-orange-900',
  urgent: 'bg-red-100 text-red-800',
  low: 'bg-slate-100 text-slate-700',
  pending: 'bg-yellow-100 text-yellow-800',
  processing: 'bg-yellow-100 text-yellow-800',
  under_review: 'bg-yellow-100 text-yellow-800',
  open: 'bg-blue-100 text-blue-800',
  declined: 'bg-red-100 text-red-800',
  disputed: 'bg-red-100 text-red-800',
  refunded: 'bg-orange-100 text-orange-800',
  voided: 'bg-gray-100 text-gray-800',
  expired: 'bg-gray-100 text-gray-600',
  failed: 'bg-red-100 text-red-800',
}

export default function Badge({ status, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize',
        statusStyles[status] || 'bg-gray-100 text-gray-800',
        className
      )}
    >
      {status.replace(/_/g, ' ')}
    </span>
  )
}
