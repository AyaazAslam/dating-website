'use client'

import { Badge } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/Button'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'
import { FadeIn } from '@/components/animations/FadeIn'
import { PhoneMockup } from '@/components/mockups/PhoneMockup'
import { FloatingNotifications } from '@/components/mockups/FloatingNotifications'
import { SITE } from '@/lib/constants'
import { formatBif } from '@/lib/utils'
import { ShieldCheck, Sparkles, Users } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-14 pt-6 sm:pb-18 sm:pt-8">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-16 h-56 w-56 rounded-full bg-[var(--primary)]/20 blur-3xl" />
        <div className="absolute right-[5%] top-10 h-64 w-64 rounded-full bg-[var(--plum)]/25 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
        <div>
          <FadeIn>
            <Badge>
              <Sparkles className="h-3.5 w-3.5" />
              {SITE.tagline}
            </Badge>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Join Kundana. Find your match in Burundi.
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
              Create a profile, activate for {formatBif(SITE.registrationFee)} {SITE.currency}, swipe
              real people, chat free after a match, and unlock WhatsApp when you are ready.
            </p>
            <p className="mt-2 text-sm font-medium text-[var(--secondary)]">
              Murakaza neza · Adults {SITE.minAge}+ only
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/register" size="lg">
              Create account · {formatBif(SITE.registrationFee)} {SITE.currency}
            </ButtonLink>
            <ButtonLink href="/#how-it-works" variant="secondary" size="lg">
              How it works
            </ButtonLink>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-8 grid max-w-lg grid-cols-3 gap-4">
            <div>
              <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                <AnimatedCounter value={10900} suffix="+" />
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/50">
                Members
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                <AnimatedCounter value={380} suffix="+" />
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/50">
                Matches
              </p>
            </div>
            <div>
              <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
                {formatBif(SITE.registrationFee)}
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/50">
                {SITE.currency} activation
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.25} className="mt-6 flex flex-wrap gap-4 text-sm text-white/60">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[var(--primary)]" />
              {SITE.minAge}+ only
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-4 w-4 text-[var(--primary)]" />
              {SITE.cities.slice(0, 3).join(', ')} + more
            </span>
          </FadeIn>
        </div>

        <div className="relative mx-auto w-full max-w-[360px] pb-4 pt-2 lg:mx-0 lg:justify-self-end">
          <FloatingNotifications />
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}
