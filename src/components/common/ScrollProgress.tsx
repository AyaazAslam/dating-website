'use client'

import { motion, useScroll, useSpring } from 'motion/react'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-[linear-gradient(90deg,var(--primary),var(--plum))]"
      style={{ scaleX }}
      aria-hidden
    />
  )
}
