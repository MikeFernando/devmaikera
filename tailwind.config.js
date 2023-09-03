/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}' /* src folder, for example */,
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      boxShadow: {
        darkMode: 'inset 0px 5px 15px rgba(0, 0, 0, 0.4)',
        lightMode: 'inset 0px 5px 15px rgba(255, 255, 255, 0.4)',
      },
      backgroundColor: {
        'gradient-light': 'bg-gradient-to-r #ffcc80 #d8860b',
        'gradient-dark': 'bg-gradient-to-r #777 #3a3a3a',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
