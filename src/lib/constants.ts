export const SITE = {
  name: 'Kundana',
  tagline: 'Find your person in Burundi',
  description:
    'Kundana helps people across Burundi discover meaningful connections through profiles, matching, and conversation.',
  url: 'https://kundana.vercel.app',
  registrationFee: 5000,
  currency: 'BIF',
  minAge: 18,
  whatsapp: 'https://wa.me/25700000000',
  supportLabel: 'Demo support number',
} as const

export const NAV_LINKS = [
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#features', label: 'Features' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#stories', label: 'Love Stories' },
] as const
