import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: { dark: '#0c3a30', accent: '#C9A96E', light: '#edf1ee', card: '#fffaeb', gold: '#C9A96E', kahiki: '#2ABFA0' },
        /** B2B homepage “money & trust” palette */
        sales: { navy: '#0E1A12', green: '#22c55e' },
        atelier: {
          forest: 'var(--atelier-forest)',
          forestDeep: 'var(--atelier-forest-deep)',
          cream: 'var(--atelier-cream)',
          creamWarm: 'var(--atelier-cream-warm)',
          paper: 'var(--atelier-paper)',
          gold: 'var(--atelier-gold)',
          teal: 'var(--atelier-teal)',
          tealDeep: 'var(--atelier-teal-deep)',
          ink: 'var(--atelier-ink)',
          inkSoft: 'var(--atelier-ink-soft)',
        },
      },
      fontFamily: {
        sans: ['Inter Tight', 'system-ui', 'sans-serif'],
        display: ['DM Serif Display', 'Georgia', 'serif'],
        atelierSans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        atelierSerif: ['var(--font-serif)', 'Georgia', 'serif'],
        atelierMono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        atelierXs: '2px',
        atelierSm: '4px',
        atelierMd: '8px',
        atelierLg: '12px',
        atelierPill: '9999px',
      },
      spacing: {
        tiny: '0.25rem',
        xxs: '0.5rem',
        xs: '0.75rem',
        sm: '1rem',
        md: '1.25rem',
        base: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '3.75rem',
        '3xl': '5rem',
        section: '6.25rem',
      },
      letterSpacing: {
        label: '0.18em',
        spec: '0.12em',
      },
      maxWidth: {
        container: '85rem',
      },
      boxShadow: {
        'brand-sm': '0px 4px 6px 0px rgba(8,39,32,0.06)',
        'brand-md': '0px 8px 24px 0px rgba(8,39,32,0.10)',
        'brand-lg': '0px 20px 60px 0px rgba(8,39,32,0.15)',
        'sales-glow': '0 0 0 1px rgba(34, 197, 94, 0.2), 0 12px 40px -8px rgba(34, 197, 94, 0.25)',
        'sales-glow-lg': '0 0 0 1px rgba(34, 197, 94, 0.15), 0 20px 50px -12px rgba(34, 197, 94, 0.2)',
      },
      keyframes: {
        gradient: {
          to: { 'background-position': '200% center' },
        },
        'magicui-marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'magicui-marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1) rotate(90deg)' },
        },
      },
      animation: {
        gradient: 'gradient 8s linear infinite',
        'magicui-marquee': 'magicui-marquee var(--duration) linear infinite',
        'magicui-marquee-vertical': 'magicui-marquee-vertical var(--duration) linear infinite',
        sparkle: 'sparkle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
