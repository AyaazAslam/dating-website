'use client'

import { FloatingElement } from '@/components/animations/FloatingElement'
import { ButtonLink } from '@/components/ui/Button'
import { SITE } from '@/lib/constants'
import { formatBif } from '@/lib/utils'
import { Heart } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#632B78_0%,#8B3A9B_45%,#FF4F87_100%)] px-6 py-14 text-center text-white sm:px-10">
        <FloatingElement className="pointer-events-none absolute left-8 top-8 text-white/25" y={6}>
          <Heart className="h-10 w-10 fill-current" />
        </FloatingElement>
        <FloatingElement className="pointer-events-none absolute bottom-8 right-10 text-white/20" delay={0.4} y={8}>
          <Heart className="h-14 w-14 fill-current" />
        </FloatingElement>

        <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/75">Ready when you are</p>
        <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
          Your Person Might Be One Swipe Away.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
          Start discovering meaningful connections today. Join for {formatBif(SITE.registrationFee)}{' '}
          {SITE.currency}. Adults 18+ only.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/register" size="lg" className="bg-white text-[var(--plum)] hover:bg-[var(--blush)]">
            Create Your Account
          </ButtonLink>
          <ButtonLink
            href="/login"
            size="lg"
            variant="secondary"
            className="border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white"
          >
            Sign In
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
