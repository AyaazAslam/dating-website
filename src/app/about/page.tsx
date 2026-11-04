import type { Metadata } from 'next'
import { SITE } from '@/lib/constants'
import { formatBif } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'About',
  description: `About ${SITE.name}.com, ${SITE.tagline}.`,
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--primary)]">About</p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-white">
        {SITE.name}.com — {SITE.tagline}
      </h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-white/60">
        <p>
          Kundana is a dating platform for adults in Burundi. Members create a profile with phone or
          email, upload photos, write a short bio, then activate the account to browse and match.
        </p>
        <p>
          Activation is a one-time fee of {formatBif(SITE.registrationFee)} {SITE.currency}, payable
          with {SITE.paymentMethods.join(', ')}. After a mutual match, in-app chat is free. WhatsApp
          unlock is {formatBif(SITE.whatsappUnlockFee)} {SITE.currency} per profile.
        </p>
        <p>
          Weekly VIP is {formatBif(SITE.weeklyVipFee)} {SITE.currency}. Monthly VIP / Diaspora is{' '}
          {formatBif(SITE.monthlyVipFee)} {SITE.currency}.
        </p>
      </div>
    </div>
  )
}
