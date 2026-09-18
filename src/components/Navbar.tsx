'use client'

import { useState } from 'react'
import Link from 'next/link'
import { logout } from '@/app/logout/actions'
import { SubmitButton } from '@/components/ui/SubmitButton'

type ModuleAccent = 'A' | 'B' | null

const accentStyles: Record<'A' | 'B', string> = {
  A: 'bg-modulA-50 text-modulA-700 dark:bg-modulA-500/10 dark:text-modulA-500',
  B: 'bg-modulB-50 text-modulB-700 dark:bg-modulB-500/10 dark:text-modulB-500',
}

const accentLabels: Record<'A' | 'B', string> = {
  A: 'Modul A',
  B: 'Modul B',
}

export function Navbar({
  userEmail,
  moduleAccent = null,
}: {
  userEmail: string
  moduleAccent?: ModuleAccent
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Link href="/pilih-modul" className="flex items-center gap-2">
            <FolderMark className="text-brand-700 dark:text-brand-400" />
            <span className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">
              E-ARSIP
            </span>
          </Link>

          {moduleAccent && (
            <span
              className={`hidden rounded-full px-2.5 py-1 text-xs font-medium sm:inline-block ${accentStyles[moduleAccent]}`}
            >
              {accentLabels[moduleAccent]}
            </span>
          )}
        </div>

        {/* Menu desktop */}
        <div className="hidden items-center gap-4 sm:flex">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {userEmail}
          </span>
          <form action={logout}>
            <LogoutInlineButton />
          </form>
        </div>

        {/* Tombol menu mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 sm:hidden"
          aria-label="Buka menu"
          aria-expanded={menuOpen}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path
                d="M5 5L15 15M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 5.5H17M3 10H17M3 14.5H17"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Panel menu mobile */}
      {menuOpen && (
        <div className="border-t border-slate-200 px-4 py-3 dark:border-slate-800 sm:hidden">
          {moduleAccent && (
            <span
              className={`mb-3 inline-block rounded-full px-2.5 py-1 text-xs font-medium ${accentStyles[moduleAccent]}`}
            >
              {accentLabels[moduleAccent]}
            </span>
          )}
          <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
            {userEmail}
          </p>
          <form action={logout}>
            <SubmitButton loadingText="Keluar...">Keluar</SubmitButton>
          </form>
        </div>
      )}
    </header>
  )
}

function LogoutInlineButton() {
  return (
    <button
      type="submit"
      className="rounded-lg border border-slate-200 px-3.5 py-1.5 text-sm font-medium text-slate-600
        transition-colors duration-150
        hover:border-slate-300 hover:bg-slate-50
        active:bg-slate-100
        dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
    >
      Keluar
    </button>
  )
}

function FolderMark({ className = '' }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" className={className} aria-hidden="true">
      <rect width="28" height="28" rx="7" fill="currentColor" opacity="0.15" />
      <path
        d="M8 10.5C8 9.67157 8.67157 9 9.5 9H12.2L13.7 10.8H18.5C19.3284 10.8 20 11.4716 20 12.3V17.5C20 18.3284 19.3284 19 18.5 19H9.5C8.67157 19 8 18.3284 8 17.5V10.5Z"
        fill="currentColor"
      />
    </svg>
  )
}
