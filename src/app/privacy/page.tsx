import type { Metadata } from 'next'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `${SITE.name} privacy policy demo page.`,
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-4xl font-semibold text-white">Privacy Policy</h1>
      <div className="mt-6 space-y-4 text-base leading-relaxed text-white/60">
        <p>
          This is a demonstration privacy page for the {SITE.name} frontend. In production, this
          document would explain how personal data such as photos, residence, age, gender, contact
          numbers, and relationship status are collected and protected.
        </p>
        <p>
          Demo form submissions stay in the browser session only and are not stored on a server by
          this project.
        </p>
        <p>Do not submit real sensitive information while reviewing this mockup.</p>
      </div>
    </div>
  )
}
