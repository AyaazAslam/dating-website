export interface Profile {
  id: string
  name: string
  age: number
  city: string
  occupation: string
  bio: string
  interests: string[]
  image: string
  compatibility: number
  verified: boolean
  onlineStatus: 'online' | 'away' | 'offline'
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: 'sparkles' | 'user' | 'message' | 'shield' | 'heart' | 'bell'
}

export interface PricingPlan {
  id: string
  name: string
  monthlyPrice: number
  yearlyPrice: number
  currency: string
  periodLabel: string
  description: string
  features: string[]
  highlighted?: boolean
  cta: string
}

export interface Testimonial {
  id: string
  name: string
  city: string
  age: number
  quote: string
  rating: number
  avatar: string
  demo: true
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface GalleryItem {
  id: string
  src: string
  alt: string
  caption: string
  tall?: boolean
}

export interface HowStep {
  id: string
  step: string
  title: string
  description: string
}
