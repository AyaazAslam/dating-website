import { HeroSection } from '@/components/sections/HeroSection'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { InteractiveDemo } from '@/components/sections/InteractiveDemo'
import { PricingSection } from '@/components/sections/PricingSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { LoveGallery } from '@/components/sections/LoveGallery'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <InteractiveDemo />
      <PricingSection />
      <TestimonialsSection />
      <LoveGallery />
      <FAQSection />
      <FinalCTA />
    </>
  )
}
