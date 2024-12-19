import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        gift_red: 'var(--gift-red)',
        gift_red_light: 'var(--gift-red-light)',
        gift_red_lighter: 'var(--gift-red-lighter)',
        gift_red_lightest: 'var(--gift-red-lightest)',
        gift_blue: 'var(--gift-blue)',
        gift_drak_light: 'var(--gift-drak-light)',
      },
    },
  },
  plugins: [],
} satisfies Config
