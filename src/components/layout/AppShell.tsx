import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export function AppShell({
  userEmail,
  moduleAccent = null,
  children,
}: {
  userEmail: string
  moduleAccent?: 'A' | 'B' | null
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar userEmail={userEmail} moduleAccent={moduleAccent} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
