import type { Transition, Variants } from 'motion/react'

export const durations = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.7,
  stagger: 0.08,
} as const

export const easeOut: Transition['ease'] = [0.22, 1, 0.36, 1]

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.normal, ease: easeOut },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: durations.normal, ease: easeOut },
  },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.normal, ease: easeOut },
  },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: durations.normal, ease: easeOut },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: durations.normal, ease: easeOut },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: durations.stagger,
      delayChildren: 0.05,
    },
  },
}

export const viewportOnce = {
  once: true,
  amount: 0.2,
  margin: '0px 0px -40px 0px',
} as const
