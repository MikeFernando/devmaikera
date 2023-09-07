/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}' /* src folder, for example */,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        montserrat: ['var(--font-montserrat)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        varianteBlue: '#2a85ff',
        varianteBlueHover: '#297ef0',
      },
      boxShadow: {
        darkMode: 'inset 0px 5px 15px rgba(0, 0, 0, 0.4)',
        lightMode: 'inset 0px 5px 15px rgba(255, 255, 255, 0.4)',
        skills: 'inset 0px -850px 0px 0px rgba(255, 255, 255, 1)',
      },
      backgroundColor: {
        'gradient-light': 'bg-gradient-to-r #ffcc80 #d8860b',
        'gradient-dark': 'bg-gradient-to-r #777 #3a3a3a',
      },
      animation: {
        arrow: 'animate 1s infinite',
      },
      keyframes: {
        animate: {
          '0%': {
            opacity: '0',
            transform: 'rotate(45deg) translate(-20px, -20px)',
          },
          '50%': { opacity: '1' },
          '100%': {
            opacity: '0',
            transform: 'rotate(45deg) translate(20px, 20px)',
          },
        },
      },
      screens: {
        xxs: '500px',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('flowbite/plugin')({
      charts: true,
    }),
  ],
}
