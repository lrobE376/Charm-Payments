// src/components/ui/FadeIn.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0  },
}

export default function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
