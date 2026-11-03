'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { useCanAnimate } from '@/hooks/usePrefersReducedMotion'
import { fadeIn, fadeUp, scaleIn, slideLeft, slideRight, viewportOnce } from './motion'

const variantsMap = {
  fade: fadeIn,
  up: fadeUp,
  left: slideLeft,
  right: slideRight,
  scale: scaleIn,
} as const

type VariantName = keyof typeof variantsMap

interface FadeInProps {
  children: ReactNode
  variant?: VariantName
  className?: string
  delay?: number
}

export function FadeIn({ children, variant = 'up', className, delay = 0 }: FadeInProps) {
  const canAnimate = useCanAnimate()
  const selected = variantsMap[variant]

  return (
    <motion.div
      className={className}
      variants={canAnimate ? selected : undefined}
      initial={canAnimate ? 'hidden' : false}
      whileInView={canAnimate ? 'visible' : undefined}
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
