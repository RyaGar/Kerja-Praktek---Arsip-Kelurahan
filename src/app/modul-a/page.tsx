import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { AppShell } from '@/components/layout/AppShell'

export default async function ModulAPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <AppShell userEmail={user.email ?? ''} moduleAccent="A">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Dashboard Modul A
        </h1>
        <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
          Konten pengelolaan surat dan arsip administrasi akan ditempatkan di sini.
        </p>
      </div>
    </AppShell>
  )
}
