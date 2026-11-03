import { howItWorks } from '@/data/how-it-works'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer'
import { UserRound, Wallet, HeartHandshake, MessageCircleHeart } from 'lucide-react'

const icons = [UserRound, Wallet, HeartHandshake, MessageCircleHeart]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Get started in minutes"
          subtitle="Your match is just a few taps away."
        />

        <StaggerContainer className="relative mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {howItWorks.map((step, index) => {
            const Icon = icons[index]
            return (
              <StaggerItem key={step.id}>
                <article className="relative h-full rounded-[1.5rem] border border-white/10 bg-[var(--surface)] p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/50 hover:shadow-[0_18px_44px_rgba(255,61,110,0.12)]">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--blush)] text-[var(--primary)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-display text-sm font-semibold text-[var(--primary)]">{step.step}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{step.description}</p>
                </article>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
