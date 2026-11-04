'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, type RegisterValues } from '@/lib/validators'
import { Button } from '@/components/ui/Button'
import { PasswordInput } from '@/components/ui/PasswordInput'
import { SITE } from '@/lib/constants'
import Link from 'next/link'

const fieldClass =
  'h-11 w-full rounded-xl border border-white/10 bg-black/20 px-3 text-sm text-white outline-none ring-[var(--primary)] placeholder:text-white/35 focus:ring-2'

export function RegisterForm() {
  const [status, setStatus] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      photoName: '',
      residence: '',
      contactNumber: '',
      ageConfirmed: false,
      termsAccepted: false,
    },
  })

  const password = watch('password')
  const confirmPassword = watch('confirmPassword')
  const confirmTouched = Boolean(confirmPassword)
  const passwordsMatch = confirmTouched && password === confirmPassword
  const passwordsDiffer = confirmTouched && password !== confirmPassword


  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 700))
    setStatus(
      `Profile details captured for demo. Next step would collect ${SITE.registrationFee.toLocaleString('en-BI')} ${SITE.currency}. No payment ran.`,
    )
  }

  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="sm:col-span-2">
        <label htmlFor="fullName" className="mb-1.5 block text-sm font-semibold text-white">
          Full name
        </label>
        <input id="fullName" className={fieldClass} {...register('fullName')} />
        {errors.fullName ? <p className="mt-1 text-xs text-[var(--primary)]">{errors.fullName.message}</p> : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-white">
          Email
        </label>
        <input id="email" type="email" className={fieldClass} {...register('email')} />
        {errors.email ? <p className="mt-1 text-xs text-[var(--primary)]">{errors.email.message}</p> : null}
      </div>

      <div>
        <label htmlFor="contactNumber" className="mb-1.5 block text-sm font-semibold text-white">
          Contact number
        </label>
        <input id="contactNumber" className={fieldClass} placeholder="+257 …" {...register('contactNumber')} />
        {errors.contactNumber ? (
          <p className="mt-1 text-xs text-[var(--primary)]">{errors.contactNumber.message}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="password" className="mb-1.5 block text-sm font-semibold text-white">
          Password
        </label>
        <PasswordInput
          id="password"
          autoComplete="new-password"
          invalid={Boolean(errors.password)}
          {...register('password')}
        />
        {errors.password ? <p className="mt-1 text-xs text-[var(--primary)]">{errors.password.message}</p> : null}
      </div>

      <div>
        <label htmlFor="confirmPassword" className="mb-1.5 block text-sm font-semibold text-white">
          Confirm password
        </label>
        <PasswordInput
          id="confirmPassword"
          autoComplete="new-password"
          invalid={Boolean(errors.confirmPassword) || passwordsDiffer}
          {...register('confirmPassword')}
        />
        {errors.confirmPassword ? (
          <p className="mt-1 text-xs text-[var(--primary)]">{errors.confirmPassword.message}</p>
        ) : null}
        {!errors.confirmPassword && passwordsMatch ? (
          <p className="mt-1 text-xs text-emerald-400">Passwords match</p>
        ) : null}
        {!errors.confirmPassword && passwordsDiffer ? (
          <p className="mt-1 text-xs text-[var(--primary)]">Passwords do not match</p>
        ) : null}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="photo" className="mb-1.5 block text-sm font-semibold text-white">
          Photo of yourself
        </label>
        <input
          id="photo"
          type="file"
          accept="image/*"
          className="block w-full text-sm text-white/60 file:mr-3 file:rounded-full file:border-0 file:bg-[var(--blush)] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-[var(--primary)]"
          onChange={(event) => {
            const file = event.target.files?.[0]
            setValue('photoName', file?.name ?? '', { shouldValidate: true })
          }}
        />
        <input type="hidden" {...register('photoName')} />
        {errors.photoName ? (
          <p className="mt-1 text-xs text-[var(--primary)]">{errors.photoName.message}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="residence" className="mb-1.5 block text-sm font-semibold text-white">
          Residence
        </label>
        <input
          id="residence"
          className={fieldClass}
          placeholder="Bujumbura, Gitega…"
          {...register('residence')}
        />
        {errors.residence ? (
          <p className="mt-1 text-xs text-[var(--primary)]">{errors.residence.message}</p>
        ) : null}
      </div>

      <div>
        <label htmlFor="age" className="mb-1.5 block text-sm font-semibold text-white">
          Age
        </label>
        <input
          id="age"
          type="number"
          min={SITE.minAge}
          className={fieldClass}
          {...register('age', { valueAsNumber: true })}
        />
        {errors.age ? <p className="mt-1 text-xs text-[var(--primary)]">{errors.age.message}</p> : null}
      </div>

      <div>
        <label htmlFor="gender" className="mb-1.5 block text-sm font-semibold text-white">
          Gender
        </label>
        <select id="gender" className={fieldClass} defaultValue="" {...register('gender')}>
          <option value="" disabled>
            Select
          </option>
          <option value="woman">Woman</option>
          <option value="man">Man</option>
          <option value="nonbinary">Non binary</option>
          <option value="prefer_not">Prefer not to say</option>
        </select>
        {errors.gender ? <p className="mt-1 text-xs text-[var(--primary)]">{errors.gender.message}</p> : null}
      </div>

      <div>
        <label htmlFor="relationshipStatus" className="mb-1.5 block text-sm font-semibold text-white">
          Relationship status
        </label>
        <select
          id="relationshipStatus"
          className={fieldClass}
          defaultValue=""
          {...register('relationshipStatus')}
        >
          <option value="" disabled>
            Select
          </option>
          <option value="single">Single</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
          <option value="separated">Separated</option>
        </select>
        {errors.relationshipStatus ? (
          <p className="mt-1 text-xs text-[var(--primary)]">{errors.relationshipStatus.message}</p>
        ) : null}
      </div>

      <label className="flex items-start gap-2 text-sm text-white/60 sm:col-span-2">
        <input type="checkbox" className="mt-1" {...register('ageConfirmed')} />
        <span>I confirm I am {SITE.minAge} years or older.</span>
      </label>
      {errors.ageConfirmed ? (
        <p className="-mt-2 text-xs text-[var(--primary)] sm:col-span-2">{errors.ageConfirmed.message}</p>
      ) : null}

      <label className="flex items-start gap-2 text-sm text-white/60 sm:col-span-2">
        <input type="checkbox" className="mt-1" {...register('termsAccepted')} />
        <span>
          I agree to the{' '}
          <Link href="/terms" className="font-semibold text-[var(--primary)]">
            Terms
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="font-semibold text-[var(--primary)]">
            Privacy Policy
          </Link>
          .
        </span>
      </label>
      {errors.termsAccepted ? (
        <p className="-mt-2 text-xs text-[var(--primary)] sm:col-span-2">{errors.termsAccepted.message}</p>
      ) : null}

      <div className="sm:col-span-2">
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Creating account…' : 'Create account'}
        </Button>
      </div>

      {status ? (
        <p className="rounded-xl bg-[var(--blush)] px-3 py-2 text-sm text-[var(--secondary)] sm:col-span-2" role="status">
          {status}
        </p>
      ) : null}
    </form>
  )
}
