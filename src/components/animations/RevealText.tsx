'use client'

import { motion, useReducedMotion } from 'motion/react'
import { durations, easeOut, viewportOnce } from './motion'

interface RevealTextProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p'
  className?: string
}

export function RevealText({ text, as: Tag = 'h2', className }: RevealTextProps) {
  const reduce = useReducedMotion()
  const words = text.split(' ')

  if (reduce) {
    return <Tag className={className}>{text}</Tag>
  }

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        className="inline"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.04 } },
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="inline-block mr-[0.28em]"
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: durations.normal, ease: easeOut },
              },
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}
