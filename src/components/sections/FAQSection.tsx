import { faqs } from '@/data/faqs'
import { Accordion } from '@/components/ui/Accordion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FadeIn } from '@/components/animations/FadeIn'

export function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title="Questions and answers"
          subtitle="Activation, chat, WhatsApp unlock, VIP, and safety — including one Kirundi FAQ."
        />
        <FadeIn>
          <Accordion items={faqs} />
        </FadeIn>
      </div>
    </section>
  )
}
