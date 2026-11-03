'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import { fadeUp, staggerContainer, viewportOnce } from './motion'

interface StaggerContainerProps {
  children: ReactNode
  className?: string
}

export function StaggerContainer({ children, className }: StaggerContainerProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  )
}
