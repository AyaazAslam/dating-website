'use client'

import { FloatingElement } from '@/components/animations/FloatingElement'
import { ButtonLink } from '@/components/ui/Button'
import { SITE } from '@/lib/constants'
import { formatBif } from '@/lib/utils'
import { Heart } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[var(--primary)]/30 bg-[linear-gradient(135deg,#2a1038_0%,#5a1848_45%,#ff3d6e_120%)] px-6 py-14 text-center text-white sm:px-10">
        <FloatingElement className="pointer-events-none absolute left-8 top-8 text-white/20" y={6}>
          <Heart className="h-10 w-10 fill-current" />
        </FloatingElement>
        <FloatingElement
          className="pointer-events-none absolute bottom-8 right-10 text-white/15"
          delay={0.4}
          y={8}
        >
          <Heart className="h-14 w-14 fill-current" />
        </FloatingElement>

        <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/75">Ready when you are</p>
        <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
          Your person is already here. Go find them.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
          Join for {formatBif(SITE.registrationFee)} {SITE.currency} — then chat free with verified
          singles across Burundi. Adults 18+ only.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/register" size="lg">
            Create your account · {formatBif(SITE.registrationFee)} {SITE.currency}
          </ButtonLink>
          <ButtonLink href="/login" size="lg" variant="secondary">
            Login
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
