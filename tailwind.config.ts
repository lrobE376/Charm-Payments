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
        brand: { dark: '#0c3a30', accent: '#9edd05', light: '#edf1ee', card: '#fffaeb' },
        /** B2B homepage “money & trust” palette */
        sales: { navy: '#0a192f', green: '#22c55e' },
      },
      fontFamily: {
        sans: ['Inter Tight', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand-sm': '0px 4px 6px 0px rgba(8,39,32,0.06)',
        'brand-md': '0px 8px 24px 0px rgba(8,39,32,0.10)',
        'brand-lg': '0px 20px 60px 0px rgba(8,39,32,0.15)',
        'sales-glow': '0 0 0 1px rgba(34, 197, 94, 0.2), 0 12px 40px -8px rgba(34, 197, 94, 0.25)',
        'sales-glow-lg': '0 0 0 1px rgba(34, 197, 94, 0.15), 0 20px 50px -12px rgba(34, 197, 94, 0.2)',
      },
    },
  },
  plugins: [],
}

export default config
