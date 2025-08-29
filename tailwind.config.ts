import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{ts,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bp-bg': '#0B1220',
        'bp-surface': '#0F172A',
        'bp-primary': '#2DD4BF',
        'bp-accent': '#F59E0B',
        'bp-muted': '#94A3B8',
        'bp-success': '#22C55E',
        'bp-danger': '#EF4444',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
