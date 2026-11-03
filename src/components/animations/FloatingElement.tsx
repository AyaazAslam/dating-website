'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

interface FloatingElementProps {
  children: ReactNode
  className?: string
  duration?: number
  delay?: number
  y?: number
}

export function FloatingElement({
  children,
  className,
  duration = 5,
  delay = 0,
  y = 10,
}: FloatingElementProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -y, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}
