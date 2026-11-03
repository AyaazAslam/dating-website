'use client'

import { MessageCircle } from 'lucide-react'
import { SITE } from '@/lib/constants'

export function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2"
      aria-label="Chat on WhatsApp demo support"
    >
      <span className="pointer-events-none hidden rounded-full bg-[var(--ink)] px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100 md:inline">
        {SITE.supportLabel}
      </span>
      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_rgba(37,211,102,0.45)] transition hover:scale-105">
        <span className="absolute inset-0 animate-soft-pulse rounded-full bg-[#25D366]/40" aria-hidden />
        <MessageCircle className="relative h-6 w-6 fill-current" />
      </span>
    </a>
  )
}
