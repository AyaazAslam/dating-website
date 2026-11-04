import type { HowStep } from '@/types'
import { SITE } from '@/lib/constants'

export const howItWorks: HowStep[] = [
  {
    id: 's1',
    step: '01',
    title: 'Create your profile',
    description:
      'Sign up with phone number or email. Upload real photos, write a short bio, and add your details.',
  },
  {
    id: 's2',
    step: '02',
    title: `Pay ${SITE.registrationFee.toLocaleString('en-BI')} ${SITE.currency}`,
    description: `One-time activation via ${SITE.paymentMethods.join(', ')}. After payment you can browse and interact.`,
  },
  {
    id: 's3',
    step: '03',
    title: 'Swipe and match',
    description: 'View profiles and photos. Swipe to like. When both people like each other, it is a match.',
  },
  {
    id: 's4',
    step: '04',
    title: 'Chat free, then connect',
    description:
      'Chat in the app for free after a match. Unlock WhatsApp for 7,000 BIF when you want to talk outside the app.',
  },
]
