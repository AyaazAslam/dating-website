import type { FaqItem } from '@/types'
import { SITE } from '@/lib/constants'

const fee = `${SITE.registrationFee.toLocaleString('en-BI')} ${SITE.currency}`
const unlock = `${SITE.whatsappUnlockFee.toLocaleString('en-BI')} ${SITE.currency}`

export const faqs: FaqItem[] = [
  {
    id: 'q1',
    question: 'How do I create an account?',
    answer:
      'Sign up with your phone number or email, upload real photos, write a short bio, and complete your profile details. Adults 18+ only.',
  },
  {
    id: 'q2',
    question: 'What is the activation fee?',
    answer: `To browse and interact you pay a one-time activation fee of ${fee} via ${SITE.paymentMethods.join(', ')}.`,
  },
  {
    id: 'q3',
    question: 'Is chatting free?',
    answer:
      'Yes. After a mutual match, basic in-app chat is free. You only pay extra if you unlock WhatsApp or buy VIP.',
  },
  {
    id: 'q4',
    question: 'How does WhatsApp unlock work?',
    answer: `You can unlock one profile WhatsApp number for ${unlock}. Weekly VIP includes 2 free unlocks each week.`,
  },
  {
    id: 'q5',
    question: 'How can I stay safe?',
    answer:
      'Use real photos, be honest, never send money to strangers, and meet for the first time in a public place such as a cafe or salon.',
  },
  {
    id: 'q6',
    question: 'Nigute nakora account?',
    answer:
      'Fungura Create Account, shyiramo numero cyangwa email, photos, na bio. Hanyuma wishyure 5,000 BIF kugira ngo utangire.',
  },
]
