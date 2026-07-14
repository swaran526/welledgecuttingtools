/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wect: {
          blue: {
            DEFAULT: '#1C2B5E',
            light: '#2E3F7A',
            dark: '#111D42',
          },
          red: {
            DEFAULT: '#C41230',
            light: '#E5213D',
            dark: '#9B0D26',
          },
          navy: {
            DEFAULT: '#080E1E',
            light: '#0D1628',
            mid: '#111D3C',
          }
        },
        metal: {
          50: '#f8fafc',
          100: '#eef2f7',
          200: '#dde6f0',
          300: '#c4d1e4',
          400: '#9aafca',
          500: '#7691b5',
          600: '#5a779e',
          700: '#456089',
          800: '#344e6e',
          900: '#1e3254',
          950: '#0f1f38',
        },
        steel: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        offwhite: '#F5F7FB',
      },
      fontFamily: {
        body: ['Manrope', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        mono: ['Space Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'metal-shine': 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.08) 50%, transparent 80%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'count-up': 'count 2s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(28, 43, 94, 0.4)',
        'glow-red': '0 0 30px rgba(196, 18, 48, 0.35)',
        'metal': '0 4px 24px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.08)',
        'card': '0 1px 3px rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.08)',
        'card-hover': '0 4px 8px rgba(0,0,0,0.06), 0 20px 64px rgba(28,43,94,0.12)',
        'glass': 'inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
