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
      },
      fontFamily: {
        sans: ['Inter Tight', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand-sm': '0px 4px 6px 0px rgba(8,39,32,0.06)',
        'brand-md': '0px 8px 24px 0px rgba(8,39,32,0.10)',
        'brand-lg': '0px 20px 60px 0px rgba(8,39,32,0.15)',
      },
    },
  },
  plugins: [],
}

export default config
