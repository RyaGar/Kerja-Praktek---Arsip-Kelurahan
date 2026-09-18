export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-6 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-xs text-slate-400 dark:text-slate-500 sm:flex-row sm:px-6">
        <p>&copy; {new Date().getFullYear()} E-ARSIP — Sistem Arsip Kelurahan</p>
        <p>Versi 1.0</p>
      </div>
    </footer>
  )
}
