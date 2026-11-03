import { features } from '@/data/features'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer'
import { Bell, Heart, MessageCircle, ShieldCheck, Sparkles, UserRound } from 'lucide-react'

const iconMap = {
  sparkles: Sparkles,
  user: UserRound,
  message: MessageCircle,
  shield: ShieldCheck,
  heart: Heart,
  bell: Bell,
} as const

export function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-24 bg-[linear-gradient(180deg,rgba(255,248,250,0.2),rgba(255,124,166,0.08))] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Built for connection"
          title="Everything You Need to Find Your Connection"
          subtitle="Thoughtful tools designed to help adults across Burundi meet with clarity and care."
        />

        <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon]
            return (
              <StaggerItem key={feature.id}>
                <article className="group flex h-full flex-col rounded-[1.5rem] border border-[var(--border)] bg-white/90 p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--secondary)] hover:shadow-[0_18px_44px_rgba(99,43,120,0.1)]">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--blush)] text-[var(--primary)] transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[var(--ink)]">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{feature.description}</p>
                </article>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
