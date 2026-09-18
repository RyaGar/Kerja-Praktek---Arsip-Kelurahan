import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-950 via-brand-800 to-slate-600">

      {/* =========================================================
          HEADER
      ========================================================= */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
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

            <div className="leading-none">
              <p className="text-base font-bold tracking-tight text-white">
                E-ARSIP
              </p>

              <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-300">
                Sistem Arsip Kelurahan
              </p>
            </div>
          </Link>


          {/* User Area */}
          <div className="flex items-center gap-3 sm:gap-5">

            <div className="hidden items-center gap-2.5 sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                U
              </div>

              <div className="hidden leading-tight lg:block">
                <p className="text-xs font-semibold text-white">
                  User Petugas
                </p>

                <p className="mt-0.5 text-[11px] text-slate-300">
                  user@cibodas.com
                </p>
              </div>
            </div>

            {/* Tombol Keluar */}
            <Link
              href="/login"
              className="group flex h-10 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3.5 text-sm font-medium text-slate-200 transition-all duration-200 hover:border-red-300/30 hover:bg-red-500/10 hover:text-red-200 focus:outline-none focus:ring-4 focus:ring-red-500/10"
            >
              <LogoutIcon />

              <span className="hidden sm:inline">
                Keluar
              </span>
            </Link>

          </div>
        </div>
      </header>


      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="relative overflow-hidden">

        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-400/10 blur-3xl" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-slate-300/10 blur-3xl" />

        <div className="pointer-events-none absolute right-1/3 top-1/3 h-72 w-72 rounded-full bg-white/5 blur-3xl" />


        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

          {/* =======================================================
              WELCOME SECTION
          ======================================================= */}
          <div className="mb-10 max-w-3xl sm:mb-12">

            {/* Status */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 backdrop-blur-sm">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs font-semibold text-brand-100">
                Sistem siap digunakan
              </span>

            </div>


            {/* Heading */}
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Selamat datang kembali
              <span className="mt-1 block text-brand-200">
                di E-ARSIP.
              </span>
            </h1>


            {/* Description */}
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Masuk sebagai{' '}
              <span className="font-semibold text-white">
                user@cibodas.com
              </span>
              . Pilih modul yang ingin Anda kelola untuk melanjutkan.
            </p>

          </div>


          {/* =======================================================
              MODULE CARDS
          ======================================================= */}
          <div className="grid gap-5 lg:grid-cols-2">


            {/* =====================================================
                MODUL A
            ===================================================== */}
            <Link
              href="/modul-a"
              className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/95 p-6 shadow-2xl shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-black/20 focus:outline-none focus:ring-4 focus:ring-brand-500/20 sm:p-7 lg:p-8"
            >

              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-800 via-brand-600 to-brand-400" />


              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />


              <div className="relative">

                {/* Icon + Arrow */}
                <div className="flex items-start justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-100">
                    <DocumentIcon />
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-brand-700 group-hover:bg-brand-700 group-hover:text-white">
                    <ArrowIcon />
                  </div>

                </div>


                {/* Content */}
                <div className="mt-7">

                  <div className="mb-2 flex flex-wrap items-center gap-2">

                    <h2 className="text-xl font-bold tracking-tight text-slate-900">
                      Modul A
                    </h2>

                    <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-700">
                      Administrasi
                    </span>

                  </div>


                  <p className="max-w-xl text-sm leading-6 text-slate-500">
                    Pengelolaan surat masuk, surat keluar,
                    dan arsip administrasi umum kelurahan.
                  </p>

                </div>


                {/* Bottom */}
                <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex items-center gap-2 text-sm font-semibold text-brand-700">
                    Buka modul

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <span className="text-xs text-slate-400">
                    Pengelolaan surat & arsip
                  </span>

                </div>

              </div>

            </Link>


            {/* =====================================================
                MODUL B
            ===================================================== */}
            <Link
              href="/modul-b"
              className="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/95 p-6 shadow-2xl shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white hover:shadow-black/20 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 sm:p-7 lg:p-8"
            >

              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-400" />


              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />


              <div className="relative">

                {/* Icon + Arrow */}
                <div className="flex items-start justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-100">
                    <UsersIcon />
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-emerald-600 group-hover:bg-emerald-600 group-hover:text-white">
                    <ArrowIcon />
                  </div>

                </div>


                {/* Content */}
                <div className="mt-7">

                  <div className="mb-2 flex flex-wrap items-center gap-2">

                    <h2 className="text-xl font-bold tracking-tight text-slate-900">
                      Modul B
                    </h2>

                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                      Pelayanan
                    </span>

                  </div>


                  <p className="max-w-xl text-sm leading-6 text-slate-500">
                    Pendataan penduduk, verifikasi berkas,
                    dan layanan permohonan warga.
                  </p>

                </div>


                {/* Bottom */}
                <div className="mt-8 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                    Buka modul

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <span className="text-xs text-slate-400">
                    Pelayanan warga
                  </span>

                </div>

              </div>

            </Link>

          </div>


          {/* =======================================================
              INFORMATION BOX
          ======================================================= */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md sm:p-5">

            <div className="flex items-start gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-100">
                <InfoIcon />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Tentang E-ARSIP
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-300">
                  Gunakan modul sesuai dengan kebutuhan pengelolaan
                  administrasi dan pelayanan kelurahan.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-white/10 bg-brand-950/70 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">

          <p>
            © {new Date().getFullYear()} E-ARSIP — Sistem Arsip Kelurahan
          </p>

          <div className="flex items-center gap-3">
            <span className="h-1 w-1 rounded-full bg-slate-500" />
            <span>Versi 1.0</span>
          </div>

        </div>

      </footer>

    </main>
  )
}


/* =========================================================
   ICON FOLDER
   ========================================================= */

function FolderIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 6.8C3.5 5.81 4.31 5 5.3 5H9L11 7H18.7C19.69 7 20.5 7.81 20.5 8.8V17.2C20.5 18.19 19.69 19 18.7 19H5.3C4.31 19 3.5 18.19 3.5 17.2V6.8Z"
        fill="currentColor"
      />
    </svg>
  )
}


/* =========================================================
   DOCUMENT ICON
   ========================================================= */

function DocumentIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 3.5H14L18 7.5V20.5H7C5.9 20.5 5 19.6 5 18.5V5.5C5 4.4 5.9 3.5 7 3.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="M14 3.5V7.5H18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />

      <path
        d="M8.5 11H15.5M8.5 14H15.5M8.5 17H13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}


/* =========================================================
   USERS ICON
   ========================================================= */

function UsersIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="9"
        cy="8"
        r="3"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M3.5 19C3.5 15.96 5.96 13.5 9 13.5C12.04 13.5 14.5 15.96 14.5 19"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M15 5.5C17.21 5.5 19 7.29 19 9.5C19 11.15 18 12.57 16.58 13.17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M16 15C18.76 15.44 20.5 17.05 20.5 19"
        stroke="currentColor"
        strokeWidth="1.7"
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
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M13 6L19 12L13 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


/* =========================================================
   LOGOUT ICON
   ========================================================= */

function LogoutIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M14 5H19C20.1 5 21 5.9 21 7V17C21 18.1 20.1 19 19 19H14"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />

      <path
        d="M11 8L15 12L11 16"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M3 12H15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  )
}


/* =========================================================
   INFO ICON
   ========================================================= */

function InfoIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M12 11V16"
        stroke="currentColor"
        strokeWidth="1.7"
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