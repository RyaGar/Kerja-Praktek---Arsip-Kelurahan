import Image from 'next/image'
import { login } from './actions'
import { SubmitButton } from '@/components/ui/SubmitButton'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string }>
}) {
  const params = await searchParams

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="flex min-h-screen">

        {/* ================= LEFT PANEL ================= */}
        <section className="relative hidden w-1/2 overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 p-10 text-white md:flex lg:p-14">

          {/* Background pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'radial-gradient(circle, #fff 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Decorative circles */}
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-brand-400/20 blur-3xl" />

          <div className="relative z-10 flex w-full flex-col justify-between">

            {/* ================= LOGO ================= */}
            <div className="flex items-center gap-3">

              {/* Logo Kabupaten Bandung Barat */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Logo Kabupaten Bandung Barat"
                  width={48}
                  height={48}
                  priority
                  className="h-full w-full object-contain"
                />
              </div>

              {/* E-ARSIP */}
              <div>
                <p className="text-lg font-bold tracking-tight">
                  E-ARSIP
                </p>

                <p className="text-xs text-brand-100">
                  Sistem Arsip Kelurahan
                </p>
              </div>

            </div>


            {/* ================= CONTENT ================= */}
            <div className="max-w-xl py-16">

              {/* Badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                Digitalisasi Administrasi
              </div>


              {/* Heading */}
              <h1 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
                Kelola arsip kelurahan
                <span className="block text-brand-200">
                  lebih mudah.
                </span>
              </h1>


              {/* Description */}
              <p className="mt-6 max-w-lg text-sm leading-7 text-brand-100 lg:text-base">
                Satu sistem untuk menyimpan, mencari, mengelola,
                dan memverifikasi dokumen administrasi kelurahan
                secara lebih cepat dan terorganisir.
              </p>


              {/* ================= FEATURES ================= */}
              <div className="mt-10 grid grid-cols-3 gap-4">

                <Feature
                  icon={<ShieldIcon />}
                  title="Aman"
                  description="Data tersimpan dengan baik"
                />

                <Feature
                  icon={<SearchIcon />}
                  title="Cepat"
                  description="Cari dokumen dengan mudah"
                />

                <Feature
                  icon={<FolderIcon />}
                  title="Teratur"
                  description="Arsip lebih terorganisir"
                />

              </div>

            </div>


            {/* ================= FOOTER ================= */}
            <div className="flex items-center justify-between text-xs text-brand-200">

              <span>
                © {new Date().getFullYear()} Pemerintah Kelurahan
              </span>

              <span className="flex items-center gap-2">
                Sistem Informasi Arsip

                <span className="h-1 w-1 rounded-full bg-brand-300" />

                v1.0
              </span>

            </div>

          </div>
        </section>


        {/* ================= RIGHT PANEL ================= */}
        <section className="relative flex w-full items-center justify-center overflow-hidden bg-white px-5 py-10 dark:bg-slate-950 sm:px-8 md:w-1/2">

          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-brand-50 dark:bg-brand-900/20" />

          <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-slate-50 dark:bg-slate-900" />


          <div className="relative z-10 w-full max-w-md">


            {/* ================= MOBILE LOGO ================= */}
            <div className="mb-10 flex items-center justify-center md:hidden">

              <div className="flex items-center gap-3">

                {/* Logo Kabupaten Bandung Barat */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-slate-200">
                  <Image
                    src="/logo.png"
                    alt="Logo Kabupaten Bandung Barat"
                    width={48}
                    height={48}
                    priority
                    className="h-full w-full object-contain"
                  />
                </div>


                {/* E-ARSIP */}
                <div>
                  <p className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                    E-ARSIP
                  </p>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Sistem Arsip Kelurahan
                  </p>
                </div>

              </div>

            </div>


            {/* ================= HEADING ================= */}
            <div className="mb-8">

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                <LoginIcon />
              </div>


              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                Selamat datang
              </h2>


              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Masuk menggunakan akun petugas yang telah
                terdaftar di sistem E-ARSIP.
              </p>

            </div>


            {/* ================= LOGIN CARD ================= */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.15)] dark:border-slate-800 dark:bg-slate-900 sm:p-7">

              <form action={login} className="space-y-5">


                {/* ================= EMAIL ================= */}
                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Email
                  </label>


                  <div className="group relative">

                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 transition-colors group-focus-within:text-brand-600">
                      <MailIcon />
                    </div>


                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="nama@kelurahan.go.id"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:hover:border-slate-600 dark:focus:border-brand-500 dark:focus:bg-slate-900"
                    />

                  </div>

                </div>


                {/* ================= PASSWORD ================= */}
                <div>

                  <div className="mb-2 flex items-center justify-between">

                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Kata Sandi
                    </label>

                  </div>


                  <div className="group relative">

                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 transition-colors group-focus-within:text-brand-600">
                      <LockIcon />
                    </div>


                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      placeholder="Masukkan kata sandi"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:hover:border-slate-600 dark:focus:border-brand-500 dark:focus:bg-slate-900"
                    />

                  </div>

                </div>


                {/* ================= ERROR ================= */}
                {params.message && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400"
                  >

                    <AlertIcon />

                    <div>

                      <p className="font-medium">
                        Gagal masuk
                      </p>

                      <p className="mt-0.5 text-xs">
                        {params.message}
                      </p>

                    </div>

                  </div>
                )}


                {/* ================= SUBMIT ================= */}
                <SubmitButton loadingText="Memeriksa akun...">
                  <span className="flex items-center justify-center gap-2">
                    Masuk
                    <ArrowIcon />
                  </span>
                </SubmitButton>

              </form>


              {/* ================= INFORMATION ================= */}
              <div className="mt-6 flex gap-3 rounded-xl bg-brand-50 p-4 dark:bg-brand-900/20">

                <div className="mt-0.5 shrink-0 text-brand-600 dark:text-brand-400">
                  <InfoIcon />
                </div>


                <div>

                  <p className="text-xs font-semibold text-brand-800 dark:text-brand-300">
                    Gunakan akun resmi
                  </p>

                  <p className="mt-1 text-xs leading-5 text-brand-700/80 dark:text-brand-400">
                    Silakan gunakan akun petugas yang telah
                    diberikan oleh pihak kelurahan.
                  </p>

                </div>

              </div>

            </div>


            {/* ================= BOTTOM TEXT ================= */}
            <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-500">
              Akses terbatas untuk petugas yang berwenang.
            </p>

          </div>

        </section>

      </div>
    </main>
  )
}


/* =========================================================
   FEATURE COMPONENT
========================================================= */

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:bg-white/10">

      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
        {icon}
      </div>

      <p className="text-sm font-semibold">
        {title}
      </p>

      <p className="mt-1 text-[11px] leading-4 text-brand-200">
        {description}
      </p>

    </div>
  )
}


/* =========================================================
   FOLDER MARK
========================================================= */

function FolderMark({ className = '' }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4.5 7.8C4.5 6.81 5.31 6 6.3 6H11L13 8.2H21.7C22.69 8.2 23.5 9.01 23.5 10V20.2C23.5 21.19 22.69 22 21.7 22H6.3C5.31 22 4.5 21.19 4.5 20.2V7.8Z"
        fill="currentColor"
      />

      <path
        d="M4.5 10.5H23.5V20.2C23.5 21.19 22.69 22 21.7 22H6.3C5.31 22 4.5 21.19 4.5 20.2V10.5Z"
        fill="currentColor"
        opacity="0.75"
      />
    </svg>
  )
}


/* =========================================================
   MAIL ICON
========================================================= */

function MailIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">

      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M4 7L12 13L20 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

    </svg>
  )
}


/* =========================================================
   LOCK ICON
========================================================= */

function LockIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">

      <rect
        x="4"
        y="10"
        width="16"
        height="11"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M8 10V7.5C8 5.29 9.79 3.5 12 3.5C14.21 3.5 16 5.29 16 7.5V10"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="15.5"
        r="1.2"
        fill="currentColor"
      />

    </svg>
  )
}


/* =========================================================
   LOGIN ICON
========================================================= */

function LoginIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">

      <path
        d="M14 5H19C20.1 5 21 5.9 21 7V17C21 18.1 20.1 19 19 19H14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M11 8L15 12L11 16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M3 12H15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

    </svg>
  )
}


/* =========================================================
   ARROW ICON
========================================================= */

function ArrowIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">

      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

    </svg>
  )
}


/* =========================================================
   SHIELD ICON
========================================================= */

function ShieldIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">

      <path
        d="M12 3L20 6V11C20 16.2 16.6 20 12 21C7.4 20 4 16.2 4 11V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M9 12L11 14L15 10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

    </svg>
  )
}


/* =========================================================
   SEARCH ICON
========================================================= */

function SearchIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">

      <circle
        cx="10.8"
        cy="10.8"
        r="6.8"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M16 16L21 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

    </svg>
  )
}


/* =========================================================
   FOLDER ICON
========================================================= */

function FolderIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">

      <path
        d="M3 7.5C3 6.67 3.67 6 4.5 6H9L11 8H19.5C20.33 8 21 8.67 21 9.5V17.5C21 18.33 20.33 19 19.5 19H4.5C3.67 19 3 18.33 3 17.5V7.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />

    </svg>
  )
}


/* =========================================================
   UPLOAD ICON
========================================================= */




/* =========================================================
   INFO ICON
========================================================= */

function InfoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">

      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M12 11V16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <circle
        cx="12"
        cy="8"
        r="1"
        fill="currentColor"
      />

    </svg>
  )
}


/* =========================================================
   ALERT ICON
========================================================= */

function AlertIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">

      <path
        d="M12 4L21 20H3L12 4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      <path
        d="M12 9V13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <circle
        cx="12"
        cy="16"
        r="1"
        fill="currentColor"
      />

    </svg>
  )
}