import Link from 'next/link'

type Accent = 'A' | 'B'

const accentMap: Record<
  Accent,
  { iconBg: string; iconText: string; ring: string; label: string }
> = {
  A: {
    iconBg: 'bg-modulA-50 dark:bg-modulA-500/10',
    iconText: 'text-modulA-600 dark:text-modulA-500',
    ring: 'group-hover:ring-modulA-200 dark:group-hover:ring-modulA-500/30',
    label: 'text-modulA-700 dark:text-modulA-500',
  },
  B: {
    iconBg: 'bg-modulB-50 dark:bg-modulB-500/10',
    iconText: 'text-modulB-600 dark:text-modulB-500',
    ring: 'group-hover:ring-modulB-200 dark:group-hover:ring-modulB-500/30',
    label: 'text-modulB-700 dark:text-modulB-500',
  },
}

export function ModuleCard({
  href,
  accent,
  title,
  description,
  icon,
}: {
  href: string
  accent: Accent
  title: string
  description: string
  icon: React.ReactNode
}) {
  const styles = accentMap[accent]

  return (
    <Link
      href={href}
      className={`group relative flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6
        shadow-card ring-1 ring-transparent transition-all duration-200
        hover:-translate-y-0.5 hover:shadow-card-hover ${styles.ring}
        dark:border-slate-800 dark:bg-slate-900`}
    >
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl ${styles.iconBg} ${styles.iconText}`}
      >
        {icon}
      </div>

      <div>
        <h2 className="text-base font-semibold text-slate-900 dark:text-white">
          {title}
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>

      <span
        className={`mt-1 flex items-center gap-1.5 text-sm font-medium ${styles.label}`}
      >
        Buka modul
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        >
          <path
            d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  )
}
