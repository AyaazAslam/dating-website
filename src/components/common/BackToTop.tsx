'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 left-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--ink)] shadow-lg transition hover:-translate-y-0.5"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  )
}
