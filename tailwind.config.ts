import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      boxShadow: {
        darkMode: 'inset 0px 5px 15px rgba(0, 0, 0, 0.4)',
      },
      backgroundColor: {
        'gradient-light': 'bg-gradient-to-r #ffcc80 #d8860b',
        'gradient-dark': 'bg-gradient-to-r #777 #3a3a3a',
      },
    },
  },
  plugins: [],
}
export default config
