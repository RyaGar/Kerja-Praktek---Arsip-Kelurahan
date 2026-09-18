'use client'

import { useFormStatus } from 'react-dom'

export function SubmitButton({
  children,
  loadingText = 'Memproses...',
  className = '',
}: {
  children: React.ReactNode
  loadingText?: string
  className?: string
}) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      disabled={pending}
      className={`relative flex w-full items-center justify-center gap-2 rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-medium text-white
        transition-colors duration-150
        hover:bg-brand-800
        active:bg-brand-900
        disabled:cursor-not-allowed disabled:opacity-70
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600
        dark:bg-brand-600 dark:hover:bg-brand-700
        ${className}`}
    >
      {pending && (
        <svg
          className="h-4 w-4 animate-spin text-white"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-90"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      )}
      <span>{pending ? loadingText : children}</span>
    </button>
  )
}
