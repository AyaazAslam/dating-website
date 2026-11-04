'use client'

import { Check } from 'lucide-react'
import { pricingPlans } from '@/data/pricing'
import { SITE } from '@/lib/constants'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ButtonLink } from '@/components/ui/Button'
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer'
import { cn, formatBif } from '@/lib/utils'

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Clear prices. No surprises."
          subtitle={`Activation ${formatBif(SITE.registrationFee)} ${SITE.currency}. Pay with ${SITE.paymentMethods.join(', ')}.`}
        />

        <StaggerContainer className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan) => (
            <StaggerItem key={plan.id}>
              <article
                className={cn(
                  'relative flex h-full flex-col rounded-[1.5rem] border p-6',
                  plan.highlighted
                    ? 'border-[var(--primary)] bg-[linear-gradient(180deg,rgba(255,61,110,0.18),rgba(21,16,28,0.95))] shadow-[0_24px_60px_rgba(255,61,110,0.16)]'
                    : 'border-white/10 bg-[var(--surface)]',
                )}
              >
                {plan.highlighted ? (
                  <span className="absolute -top-3 left-6 rounded-full bg-[var(--primary)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                    Start here
                  </span>
                ) : null}
                <h3 className="font-display text-2xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-white/60">{plan.description}</p>
                <p className="mt-5 font-display text-4xl font-semibold tracking-tight text-white">
                  {formatBif(plan.monthlyPrice)}
                  <span className="ml-1 text-base font-medium text-white/60">
                    {plan.currency}/{plan.periodLabel}
                  </span>
                </p>
                <ul className="mt-5 space-y-2.5 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-white/75">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                      <span>{feature}</span>
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
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
