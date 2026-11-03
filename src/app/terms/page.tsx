import type { Metadata } from 'next'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: `${SITE.name} terms demo page.`,
}

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-4xl font-semibold text-[var(--ink)]">Terms and Conditions</h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--muted)]">
        <p>
          {SITE.name} accounts are intended for adults {SITE.minAge} years and older. By creating an
          account in a production version, members would agree to respectful conduct and accurate
          profile information.
        </p>
        <p>
          This website is a frontend demo. Pricing, memberships, and interactions do not create legal
          obligations or real payments.
        </p>
      </div>
    </div>
  )
}
