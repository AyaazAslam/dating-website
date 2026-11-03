'use client'

import { Heart, MessageCircle, Sparkles } from 'lucide-react'
import { FloatingElement } from '@/components/animations/FloatingElement'
import { MatchNotification } from './MatchNotification'

export function FloatingNotifications() {
  return (
    <>
      <FloatingElement className="absolute -left-2 top-8 z-20 hidden w-56 sm:block lg:-left-16" delay={0.1}>
        <MatchNotification />
      </FloatingElement>

      <FloatingElement
        className="absolute -right-1 top-24 z-20 hidden w-44 sm:block lg:-right-10"
        delay={0.4}
        y={8}
      >
        <div className="rounded-2xl border border-white/50 bg-white/95 p-3 shadow-xl backdrop-blur">
          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--ink)]">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--blush)] text-[var(--primary)]">
              <Heart className="h-4 w-4 animate-heartbeat" />
            </span>
            New Like
          </div>
        </div>
      </FloatingElement>

      <FloatingElement
        className="absolute bottom-28 -left-1 z-20 hidden w-52 sm:block lg:-left-14"
        delay={0.7}
        y={9}
      >
        <div className="rounded-2xl border border-white/50 bg-white/95 p-3 shadow-xl backdrop-blur">
          <div className="flex items-start gap-2">
            <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--blush)] text-[var(--plum)]">
              <MessageCircle className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[var(--ink)]">New Message</p>
              <p className="text-xs text-[var(--muted)]">Hey, loved your profile</p>
            </div>
          </div>
        </div>
      </FloatingElement>

      <FloatingElement
        className="absolute bottom-40 -right-2 z-20 hidden w-40 sm:block lg:-right-8"
        delay={1}
        y={7}
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-[var(--plum)] px-3 py-2 text-xs font-bold text-white shadow-lg">
          <Sparkles className="h-3.5 w-3.5" />
          92% Compatible
        </div>
      </FloatingElement>
    </>
  )
}
