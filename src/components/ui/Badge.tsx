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
  pending: 'bg-yellow-100 text-yellow-800',
  processing: 'bg-yellow-100 text-yellow-800',
  under_review: 'bg-yellow-100 text-yellow-800',
  open: 'bg-blue-100 text-blue-800',
  declined: 'bg-red-100 text-red-800',
  disputed: 'bg-red-100 text-red-800',
  refunded: 'bg-orange-100 text-orange-800',
  voided: 'bg-gray-100 text-gray-800',
  lost: 'bg-red-100 text-red-800',
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
