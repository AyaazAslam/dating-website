'use client'

import { motion } from 'motion/react'
import { useCanAnimate } from '@/hooks/usePrefersReducedMotion'
import { durations, easeOut, viewportOnce } from './motion'

interface RevealTextProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p'
  className?: string
}

export function RevealText({ text, as: Tag = 'h2', className }: RevealTextProps) {
  const canAnimate = useCanAnimate()
  const words = text.split(' ')

  return (
    <Tag className={className}>
      <motion.span
        className="inline"
        initial={canAnimate ? 'hidden' : false}
        whileInView={canAnimate ? 'visible' : undefined}
        viewport={viewportOnce}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.04 } },
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="inline-block"
            style={{ marginRight: index === words.length - 1 ? 0 : '0.28em' }}
            variants={
              canAnimate
                ? {
                    hidden: { opacity: 0, y: 16 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: durations.normal, ease: easeOut },
                    },
                  }
                : undefined
            }
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}
