// src/components/ui/FloatingCard.tsx
'use client'

import { motion } from 'framer-motion'

export default function FloatingCard({
  children,
  duration = 4,
  className,
  style,
}: {
  children: React.ReactNode
  duration?: number
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <motion.div
      animate={{ y: [-8, 0, -8] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
