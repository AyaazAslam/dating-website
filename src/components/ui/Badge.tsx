import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Badge({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--primary)] backdrop-blur',
        className,
      )}
    >
      {children}
    </span>
  )
}
