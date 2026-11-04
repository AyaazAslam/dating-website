import Link from 'next/link'
import { SITE } from '@/lib/constants'

const explore = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#features', label: 'Features' },
  { href: '/#pricing', label: 'Pricing' },
]

const legal = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms and Conditions' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#09040f]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-2xl font-semibold text-white">
            {SITE.name}
            <span className="text-[var(--primary)]">.com</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
            Burundi&apos;s dating app for adults 18+. Activate, swipe, chat free after a match, unlock
            WhatsApp when ready.
          </p>
          <div className="mt-5 flex gap-3">
            {['IG', 'FB', 'TT'].map((label) => (
              <span
                key={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-white/70"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-white">Explore</p>
          <ul className="mt-4 space-y-2">
            {explore.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/55 hover:text-[var(--primary)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-white">Legal</p>
          <ul className="mt-4 space-y-2">
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/55 hover:text-[var(--primary)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/40">
        © 2026 {SITE.name}. Demo project for client review.
      </div>
    </footer>
  )
}
