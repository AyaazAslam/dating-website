import { z } from 'zod'
import { SITE } from '@/lib/constants'

export const loginSchema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  remember: z.boolean().optional(),
})

export const registerSchema = z
  .object({
    fullName: z.string().min(2, 'Enter your full name'),
    email: z.string().email('Enter a valid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm your password'),
    photoName: z.string().min(1, 'Upload a photo of yourself'),
    residence: z.string().min(2, 'Enter your residence'),
    age: z
      .number({ error: 'Enter your age' })
      .int('Age must be a whole number')
      .min(SITE.minAge, `You must be ${SITE.minAge} or older`)
      .max(100, 'Enter a valid age'),
    gender: z.enum(['woman', 'man', 'nonbinary', 'prefer_not'], {
      message: 'Select your gender',
    }),
    contactNumber: z
      .string()
      .min(8, 'Enter a valid contact number')
      .regex(/^[0-9+\-\s()]+$/, 'Use digits and phone symbols only'),
    relationshipStatus: z.enum(['single', 'divorced', 'widowed', 'separated'], {
      message: 'Select your relationship status',
    }),
    ageConfirmed: z.boolean().refine((value) => value, {
      message: `Confirm you are ${SITE.minAge}+`,
    }),
    termsAccepted: z.boolean().refine((value) => value, {
      message: 'Accept the terms to continue',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type LoginValues = z.infer<typeof loginSchema>
export type RegisterValues = z.infer<typeof registerSchema>
