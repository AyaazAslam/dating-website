import type { FaqItem } from '@/types'
import { SITE } from '@/lib/constants'

const fee = `${SITE.registrationFee.toLocaleString('en-BI')} ${SITE.currency}`

export const faqs: FaqItem[] = [
  {
    id: 'q1',
    question: 'How do I create an account?',
    answer:
      'Open Create Account, upload a clear photo of yourself, then add residence, age, gender, contact number, and relationship status. Confirm you are 18 or older and submit.',
  },
  {
    id: 'q2',
    question: 'Is creating a profile free?',
    answer: `Browsing the marketing site is free. Activating a member account requires a one time registration fee of ${fee}. This demo does not process real payments.`,
  },
  {
    id: 'q3',
    question: 'How does matching work?',
    answer:
      'Like a profile. When someone likes you back, you get a match and can start chatting in the demo interface.',
  },
  {
    id: 'q4',
    question: 'Can I update my profile?',
    answer:
      'Yes. After signup you can update photos, residence, relationship status, and other details from your profile settings.',
  },
  {
    id: 'q5',
    question: 'How can I protect my privacy?',
    answer:
      'Only share what you are comfortable sharing. Kundana accounts are for adults 18+. Never send money to strangers and report suspicious behavior.',
  },
  {
    id: 'q6',
    question: 'How do I contact support?',
    answer:
      'Use the floating WhatsApp button for demo support. In production this would connect to a real support line.',
  },
]
