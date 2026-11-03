'use client'

import { Badge } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/Button'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'
import { RevealText } from '@/components/animations/RevealText'
import { FadeIn } from '@/components/animations/FadeIn'
import { PhoneMockup } from '@/components/mockups/PhoneMockup'
import { FloatingNotifications } from '@/components/mockups/FloatingNotifications'
import { SITE } from '@/lib/constants'
import { formatBif } from '@/lib/utils'
import { ShieldCheck, Sparkles, Users } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-8 sm:pb-20 sm:pt-10">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,79,135,0.22),transparent_70%)] blur-2xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(99,43,120,0.18),transparent_70%)] blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--page)] to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
        <div>
          <FadeIn>
            <Badge>
              <Sparkles className="h-3.5 w-3.5" />
              Find Your Connection
            </Badge>
          </FadeIn>

          <RevealText
            as="h1"
            text="Swipe. Match. Find Your Person."
            className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl"
          />

          <FadeIn delay={0.1}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              Meet genuine people across Burundi, discover meaningful connections, and let your next
              beautiful story begin. Adults 18+ only.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/register" size="lg">
              Create Your Account
            </ButtonLink>
            <ButtonLink href="/#how-it-works" variant="secondary" size="lg">
              Explore How It Works
            </ButtonLink>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            <div>
              <p className="font-display text-2xl font-semibold text-[var(--ink)] sm:text-3xl">
                <AnimatedCounter value={12000} suffix="+" />
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                Demo members
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-[var(--ink)] sm:text-3xl">
                <AnimatedCounter value={480} suffix="+" />
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                Demo matches
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-[var(--ink)] sm:text-3xl">
                {formatBif(SITE.registrationFee)}
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                {SITE.currency} to join
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.25} className="mt-6 flex flex-wrap gap-4 text-sm text-[var(--muted)]">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[var(--primary)]" />
              18+ verified age gate
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-4 w-4 text-[var(--primary)]" />
              Burundi focused
            </span>
          </FadeIn>
        </div>

        <div className="relative mx-auto w-full max-w-[360px] pb-6 pt-4 lg:mx-0 lg:justify-self-end">
          <FloatingNotifications />
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}
