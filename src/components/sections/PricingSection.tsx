'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { pricingPlans } from '@/data/pricing'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer'
import { cn, formatBif } from '@/lib/utils'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

export function PricingSection() {
  const [yearly, setYearly] = useState(false)
  const reduce = useReducedMotion()

  return (
    <section id="pricing" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Clear pricing"
          title="Simple Plans. Meaningful Connections."
          subtitle="Demo pricing in Burundi Francs. No real payments are processed on this site."
        />

        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center rounded-full border border-[var(--border)] bg-white p-1">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition',
                !yearly ? 'bg-[var(--plum)] text-white' : 'text-[var(--muted)]',
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition',
                yearly ? 'bg-[var(--plum)] text-white' : 'text-[var(--muted)]',
              )}
            >
              Yearly
            </button>
          </div>
        </div>

        <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan) => {
            const amount = yearly ? plan.yearlyPrice : plan.monthlyPrice
            const label =
              plan.id === 'registration'
                ? 'one time'
                : yearly
                  ? 'year'
                  : plan.periodLabel

            return (
              <StaggerItem key={plan.id}>
                <article
                  className={cn(
                    'relative flex h-full flex-col rounded-[1.6rem] border p-6',
                    plan.highlighted
                      ? 'border-transparent bg-[var(--plum)] text-white shadow-[0_24px_60px_rgba(99,43,120,0.28)]'
                      : 'border-[var(--border)] bg-white text-[var(--ink)]',
                  )}
                >
                  {plan.highlighted ? (
                    <span className="absolute -top-3 left-6 rounded-full bg-[var(--primary)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                      Start here
                    </span>
                  ) : null}
                  <h3 className="font-display text-2xl font-semibold">{plan.name}</h3>
                  <p className={cn('mt-2 text-sm', plan.highlighted ? 'text-white/75' : 'text-[var(--muted)]')}>
                    {plan.description}
                  </p>
                  <div className="mt-5">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={`${plan.id}-${amount}-${label}`}
                        initial={reduce ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduce ? undefined : { opacity: 0, y: -8 }}
                        className="font-display text-4xl font-semibold tracking-tight"
                      >
                        {formatBif(amount)}
                        <span className="ml-1 text-base font-medium opacity-80">
                          {plan.currency}/{label}
                        </span>
                      </motion.p>
                    </AnimatePresence>
                  </div>
                  <ul className="mt-5 space-y-2.5 text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check
                          className={cn(
                            'mt-0.5 h-4 w-4 shrink-0',
                            plan.highlighted ? 'text-[var(--secondary)]' : 'text-[var(--primary)]',
                          )}
                        />
                        <span className={plan.highlighted ? 'text-white/85' : 'text-[var(--muted)]'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href="/register"
                    variant={plan.highlighted ? 'primary' : 'secondary'}
                    className="mt-6 w-full"
                  >
                    {plan.cta}
                  </ButtonLink>
                </article>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
