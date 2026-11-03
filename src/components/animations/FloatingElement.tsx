'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { useCanAnimate } from '@/hooks/usePrefersReducedMotion'

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
  const canAnimate = useCanAnimate()

  return (
    <motion.div
      className={className}
      animate={canAnimate ? { y: [0, -y, 0] } : undefined}
      transition={
        canAnimate
          ? {
              duration,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  )
}
