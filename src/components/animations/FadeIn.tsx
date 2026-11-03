'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
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
  const reduce = useReducedMotion()
  const selected = variantsMap[variant]

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={selected}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
