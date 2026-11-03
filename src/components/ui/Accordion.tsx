'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Minus, Plus } from 'lucide-react'
import { useId, useState } from 'react'
import type { FaqItem } from '@/types'
import { cn } from '@/lib/utils'

export function Accordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)
  const reduce = useReducedMotion()
  const baseId = useId()

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id
        const panelId = `${baseId}-${item.id}-panel`
        const buttonId = `${baseId}-${item.id}-button`

        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-[var(--ink)]"
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span>{item.question}</span>
                <span
                  className={cn(
                    'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--blush)] text-[var(--primary)]',
                  )}
                >
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
