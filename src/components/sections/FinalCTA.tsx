'use client'

import { ButtonLink } from '@/components/ui/Button'
import { SITE } from '@/lib/constants'
import { formatBif } from '@/lib/utils'

export function FinalCTA() {
  return (
    <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[var(--primary)]/30 bg-[linear-gradient(135deg,#2a1038_0%,#5a1848_45%,#ff3d6e_120%)] px-6 py-14 text-center text-white sm:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/75">
          Join Kundana today
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
          Your match is one swipe away.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
          Activate for {formatBif(SITE.registrationFee)} {SITE.currency} via{' '}
          {SITE.paymentMethods.join(', ')}. Chat free after a match.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/register" size="lg">
            Create account · {formatBif(SITE.registrationFee)} {SITE.currency}
          </ButtonLink>
          <ButtonLink href="/login" size="lg" variant="secondary">
            Sign in
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
