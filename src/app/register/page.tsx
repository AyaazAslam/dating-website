import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/constants'
import { formatBif } from '@/lib/utils'
import { RegisterForm } from './RegisterForm'

export const metadata: Metadata = {
  title: 'Create Account',
  description: `Join Kundana. Activation ${formatBif(SITE.registrationFee)} ${SITE.currency}. Adults 18+ only.`,
}

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <div className="rounded-[1.8rem] border border-white/10 bg-[var(--surface)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
          Join Kundana
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-white">Create an account</h1>
        <p className="mt-2 text-sm text-white/60">
          Upload a photo, add residence, age, gender, contact number, and relationship status.
          Activation is {formatBif(SITE.registrationFee)} {SITE.currency} via{' '}
          {SITE.paymentMethods.join(', ')}. Adults {SITE.minAge}+ only.
        </p>
        <div className="mt-6">
          <RegisterForm />
        </div>
        <p className="mt-6 text-sm text-white/60">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-[var(--primary)] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
