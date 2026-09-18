import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        // Warna identitas utama E-ARSIP
        brand: {
          50: '#EEF2F6',
          100: '#D6E0EA',
          200: '#AEC1D5',
          300: '#89A4BF',
          400: '#5A7A9C',
          500: '#3F6085',
          600: '#2C4A6E',
          700: '#1E3A5F',
          800: '#152B47',
          900: '#0D1B2E',
          950: '#08111E',
        },

        // Modul A
        modulA: {
          50: '#EFF6FF',
          200: '#BFDBFE',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },

        // Modul B
        modulB: {
          50: '#ECFDF5',
          200: '#A7F3D0',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
      },

      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },

      boxShadow: {
        card:
          '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -8px rgba(15, 23, 42, 0.10)',

        'card-hover':
          '0 4px 8px rgba(15, 23, 42, 0.06), 0 16px 32px -12px rgba(15, 23, 42, 0.16)',
      },
    },
  },

  plugins: [],
}

export default config