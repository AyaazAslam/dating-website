'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { NAV_LINKS, SITE } from '@/lib/constants'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { ButtonLink } from '@/components/ui/Button'
import { cn, formatBif } from '@/lib/utils'

function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5" aria-label={`${SITE.name} home`}>
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--primary)] text-white shadow-[0_10px_24px_rgba(255,61,110,0.45)]">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M12 21s-6.7-4.35-9.3-7.6C.7 10.9 1.1 7.4 3.6 5.7c2-1.4 4.7-.9 6.2 1l2.2 2.4 2.2-2.4c1.5-1.9 4.2-2.4 6.2-1 2.5 1.7 2.9 5.2.9 7.7C18.7 16.65 12 21 12 21z" />
        </svg>
      </span>
      <span className="font-display text-xl font-semibold tracking-tight text-white">
        {SITE.name}
        <span className="text-[var(--primary)]">.com</span>
      </span>
    </Link>
  )
}

export function Navbar() {
  const scrolled = useScrollDirection()
  const [open, setOpen] = useState(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition duration-300',
        scrolled
          ? 'border-b border-white/10 bg-[rgba(11,6,18,0.85)] shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-semibold text-white/65 transition hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-[var(--primary)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/login" variant="ghost" className="hidden sm:inline-flex">
            Sign In
          </ButtonLink>
          <ButtonLink href="/register" size="sm" className="hidden sm:inline-flex">
            Join · {formatBif(SITE.registrationFee)} {SITE.currency}
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              className="absolute left-4 right-4 top-[calc(100%+0.4rem)] z-50 overflow-hidden rounded-3xl border border-white/10 bg-[#15101c]/95 p-4 shadow-2xl backdrop-blur md:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm font-semibold text-white hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-3 grid gap-2">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/15 text-sm font-semibold text-white"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white"
                >
                  Join · {formatBif(SITE.registrationFee)} {SITE.currency}
                </Link>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  )
}
