/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      colors: {
        background: {
          light: '#ffffff',
          dark: '#0a0d14',
        },
        surface: {
          light: '#f8fafc',
          dark: '#111622',
        },
        'surface-subtle': {
          light: '#f1f5f9',
          dark: '#161d2d',
        },
        border: {
          light: '#e2e8f0',
          dark: '#20293a',
        },
        accent: {
          primary: '#2563eb',
          'primary-dark': '#3b82f6',
          emerald: '#10b981',
          cyan: '#06b6d4',
          amber: '#f59e0b',
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              textDecorationThickness: '1px',
              textUnderlineOffset: '3px',
              '&:hover': {
                color: theme('colors.blue.500'),
              },
            },
            code: {
              fontFamily: theme('fontFamily.mono').join(', '),
              fontWeight: '400',
              padding: '0.15rem 0.35rem',
              borderRadius: '0.25rem',
              fontSize: '0.875em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              borderRadius: '0.375rem',
              padding: '1rem 1.25rem',
              border: '1px solid var(--border-color)',
            },
            h1: {
              letterSpacing: '-0.025em',
              fontWeight: '700',
            },
            h2: {
              letterSpacing: '-0.02em',
              fontWeight: '600',
            },
            h3: {
              letterSpacing: '-0.015em',
              fontWeight: '600',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
