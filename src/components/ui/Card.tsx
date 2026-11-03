import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Card({
  children,
  className,
  hover = true,
}: {
  children: ReactNode
  className?: string
  hover?: boolean
}) {
  return (
    <div
      className={cn(
        'rounded-[1.35rem] border border-[var(--border)] bg-white/90 p-6 shadow-[0_10px_40px_rgba(99,43,120,0.06)]',
        hover && 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(99,43,120,0.12)]',
        className,
      )}
    >
      {children}
    </div>
  )
}
