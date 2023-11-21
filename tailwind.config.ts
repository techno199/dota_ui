import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'trajan': ['Trajan']
      },
      colors: {
        'steam-primary': 'rgb(23 29 37)',
        'col-white': 'rgb(238 238 238)',
        'col-grey': {
          DEFAULT: 'rgb(15 13 18)',
          dark: 'rgb(60 60 60)',
          light: 'rgb(87 104 104)',
          lighter: 'rgb(204 204 204)',
        },
        // blue
        'col-blue': {
          DEFAULT: 'rgb(32 120 164)',
          dark: 'rgb(26 109 135)'
        },
        // gold
        'col-gold': 'rgb(160 99 80)',
        // green
        'col-green': {
          DEFAULT: 'rgb(57 134 65)',
          light: 'rgb(87 143 100)',
          lighter: 'rgb(163 223 160)'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
