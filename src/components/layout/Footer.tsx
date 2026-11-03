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
    <footer className="border-t border-[var(--border)] bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-2xl font-semibold text-[var(--ink)]">{SITE.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
            Helping people across Burundi discover meaningful connections, one story at a time.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-xs font-bold text-[var(--ink)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              IG
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-xs font-bold text-[var(--ink)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              FB
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-xs font-bold text-[var(--ink)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              TT
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--ink)]">Explore</p>
          <ul className="mt-4 space-y-2">
            {explore.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-[var(--muted)] hover:text-[var(--primary)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--ink)]">Legal</p>
          <ul className="mt-4 space-y-2">
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-[var(--muted)] hover:text-[var(--primary)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border)] px-4 py-5 text-center text-sm text-[var(--muted)]">
        © 2026 {SITE.name}. Demo project for client review.
      </div>
    </footer>
  )
}
