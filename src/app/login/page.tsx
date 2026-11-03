import type { Metadata } from 'next'
import Link from 'next/link'
import { LoginForm } from './LoginForm'

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your Kundana demo account.',
}

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col justify-center px-4 py-14 sm:px-6">
      <div className="rounded-[1.8rem] border border-white/10 bg-[var(--surface)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--primary)]">Welcome back</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-white">Sign in</h1>
        <p className="mt-2 text-sm text-white/60">
          Frontend demo only. No real authentication is connected yet.
        </p>
        <div className="mt-6">
          <LoginForm />
        </div>
        <p className="mt-6 text-sm text-white/60">
          New here?{' '}
          <Link href="/register" className="font-semibold text-[var(--primary)] hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  )
}
