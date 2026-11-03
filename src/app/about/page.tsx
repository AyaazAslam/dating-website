import type { Metadata } from 'next'
import { SITE } from '@/lib/constants'
import { formatBif } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'About',
  description: `About ${SITE.name}, a dating platform demo for Burundi.`,
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--primary)]">About</p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-white">{SITE.name}</h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-white/60">
        <p>
          {SITE.name} is a premium dating platform concept for adults in Burundi. This website is a
          client demo mockup inspired by modern dating product experiences.
        </p>
        <p>
          Members create a profile with a photo, residence, age, gender, contact number, and
          relationship status. Accounts are for people {SITE.minAge}+. Activation is priced at{' '}
          {formatBif(SITE.registrationFee)} {SITE.currency} in this demo.
        </p>
        <p>
          No real matchmaking, payments, or identity verification run on this frontend. Content and
          statistics are fictional demonstration data.
        </p>
      </div>
    </div>
  )
}
