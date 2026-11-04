export const SITE = {
  name: 'Kundana',
  tagline: "Burundi's #1 Dating App",
  description:
    'Kundana.com helps adults in Burundi create profiles, swipe to match, chat free after a match, and unlock WhatsApp when ready. One-time activation is 5,000 BIF.',
  url: 'https://dating-website-snowy.vercel.app',
  registrationFee: 5000,
  whatsappUnlockFee: 7000,
  weeklyVipFee: 10000,
  monthlyVipFee: 20000,
  currency: 'BIF',
  minAge: 18,
  paymentMethods: ['Lumucash', 'Cashtel', 'Bencobu eNoti'] as const,
  cities: ['Bujumbura', 'Gitega', 'Ngozi', 'Rumonge'] as const,
  whatsapp: 'https://wa.me/25700000000',
  supportLabel: 'Need help?',
} as const

export const NAV_LINKS = [
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#features', label: 'Features' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#safety', label: 'Safety' },
  { href: '/#stories', label: 'Stories' },
] as const
