import { SectionHeading } from '@/components/ui/SectionHeading'
import { FadeIn } from '@/components/animations/FadeIn'
import { PhoneMockup } from '@/components/mockups/PhoneMockup'

export function InteractiveDemo() {
  return (
    <section id="demo" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Try the flow"
            title="Swipe. Match. Chat."
            subtitle="Use this demo phone to pass, like, open chats, and switch tabs. No backend is connected."
          />
          <FadeIn className="mt-6 space-y-3 text-sm leading-relaxed text-white/60">
            <p>Pass shows the next profile. Like opens a match popup. Chats switch conversations.</p>
            <p>This is a product preview for client review, not a live matchmaking system.</p>
          </FadeIn>
        </div>
        <FadeIn variant="scale">
          <PhoneMockup interactive />
        </FadeIn>
      </div>
    </section>
  )
}
