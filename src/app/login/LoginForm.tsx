'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginValues } from '@/lib/validators'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export function LoginForm() {
  const [status, setStatus] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '', remember: false },
  })

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 600))
    setStatus('Signed in locally for demo. Connect a backend to make this real.')
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-[var(--ink)]">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className="h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--page)] px-3 text-sm outline-none ring-[var(--primary)] focus:ring-2"
          {...register('email')}
        />
        {errors.email ? <p className="mt-1 text-xs text-[var(--primary)]">{errors.email.message}</p> : null}
      </div>

      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-semibold text-[var(--ink)]">
            Password
          </label>
          <Link href="/login" className="text-xs font-semibold text-[var(--primary)]">
            Forgot password?
          </Link>
        </div>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          className="h-11 w-full rounded-xl border border-[var(--border)] bg-[var(--page)] px-3 text-sm outline-none ring-[var(--primary)] focus:ring-2"
          {...register('password')}
        />
        {errors.password ? (
          <p className="mt-1 text-xs text-[var(--primary)]">{errors.password.message}</p>
        ) : null}
      </div>

      <label className="flex items-center gap-2 text-sm text-[var(--muted)]">
        <input type="checkbox" className="rounded border-[var(--border)]" {...register('remember')} />
        Remember me
      </label>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Signing in…' : 'Sign in'}
      </Button>

      {status ? (
        <p className="rounded-xl bg-[var(--blush)] px-3 py-2 text-sm text-[var(--plum)]" role="status">
          {status}
        </p>
      ) : null}
    </form>
  )
}
