'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
  className?: string
}

export function Modal({ open, onClose, title, children, className }: ModalProps) {
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <motion.button
            type="button"
            aria-label="Close dialog backdrop"
            className="absolute inset-0 bg-[rgba(33,24,39,0.55)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className={cn(
              'relative z-10 w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl',
              className,
            )}
            initial={reduce ? false : { opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.28 }}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <h3 className="font-display text-2xl font-semibold text-[var(--ink)]">{title}</h3>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-2 text-[var(--muted)] hover:bg-[var(--blush)] hover:text-[var(--ink)]"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {children}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  )
}
