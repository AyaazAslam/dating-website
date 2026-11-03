'use client'

import { Badge } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/Button'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'
import { FadeIn } from '@/components/animations/FadeIn'
import { PhoneMockup } from '@/components/mockups/PhoneMockup'
import { FloatingNotifications } from '@/components/mockups/FloatingNotifications'
import { SITE } from '@/lib/constants'
import { formatBif } from '@/lib/utils'
import { Heart, ShieldCheck, Sparkles, Users } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-6 sm:pb-20 sm:pt-8">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-24 h-40 w-40 -translate-x-1/2 rounded-full bg-[var(--primary)]/20 blur-3xl" />
        <Heart className="absolute left-[8%] top-28 h-10 w-10 fill-[var(--primary)] text-[var(--primary)] opacity-30" />
        <Heart className="absolute right-[12%] top-40 h-7 w-7 fill-white/20 text-white/20 opacity-40" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:px-8">
        <div>
          <FadeIn>
            <Badge className="border-white/10 bg-white/5 text-[var(--secondary)]">
              <Sparkles className="h-3.5 w-3.5" />
              Burundi dating app
            </Badge>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Swipe. Match. Chat. Find Love in Burundi.
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
              Real verified singles in Bujumbura, Gitega, Ngozi and Rumonge. Swipe profiles, chat
              free, unlock WhatsApp when it feels right. Adults 18+ only.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/register" size="lg">
              Create account
            </ButtonLink>
            <ButtonLink href="/login" variant="secondary" size="lg">
              Login
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
                {SITE.currency} to join
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.25} className="mt-6 flex flex-wrap gap-4 text-sm text-white/60">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[var(--primary)]" />
              18+ only
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
