'use client'

import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'motion/react'
import { useEffect, useRef } from 'react'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  className?: string
}

export function AnimatedCounter({ value, suffix = '', className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => Math.round(latest).toLocaleString())

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      motionValue.set(value)
      return
    }
    const controls = animate(motionValue, value, { duration: 1.2, ease: 'easeOut' })
    return () => controls.stop()
  }, [inView, motionValue, reduce, value])

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}
