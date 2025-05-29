import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      boxShadow: {
        'input-focus': 'inset 0 1px 1px #00000013, 0 0 8px #ddd'
      },
      container: {
        center: true,
        screens: {
          '2xl': '1170px'
        }
      }
    }
  }
} satisfies Config
