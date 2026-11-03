'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { useCanAnimate } from '@/hooks/usePrefersReducedMotion'
import { fadeUp, staggerContainer, viewportOnce } from './motion'

interface StaggerContainerProps {
  children: ReactNode
  className?: string
}

export function StaggerContainer({ children, className }: StaggerContainerProps) {
  const canAnimate = useCanAnimate()

  return (
    <motion.div
      className={className}
      variants={canAnimate ? staggerContainer : undefined}
      initial={canAnimate ? 'hidden' : false}
      whileInView={canAnimate ? 'visible' : undefined}
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
  const canAnimate = useCanAnimate()

  return (
    <motion.div className={className} variants={canAnimate ? fadeUp : undefined}>
      {children}
    </motion.div>
  )
}
