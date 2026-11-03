import type { HowStep } from '@/types'
import { SITE } from '@/lib/constants'

export const howItWorks: HowStep[] = [
  {
    id: 's1',
    step: '01',
    title: 'Create Your Profile',
    description:
      'Upload a clear photo, add residence, age, gender, contact number, and relationship status.',
  },
  {
    id: 's2',
    step: '02',
    title: `Activate for ${SITE.registrationFee.toLocaleString('en-BI')} ${SITE.currency}`,
    description:
      'One time registration for adults 18+. Instant activation after payment confirmation.',
  },
  {
    id: 's3',
    step: '03',
    title: 'Match and Connect',
    description: 'Like someone, get a mutual match, and start a conversation.',
  },
  {
    id: 's4',
    step: '04',
    title: 'Make It Meaningful',
    description: 'Build genuine connections and take the next step together.',
  },
]
