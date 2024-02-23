/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        BebasNeue: ['Bebas Neue', 'sans-serif'],
        Gudea: ['Gudea', 'sans-serif'],
        SCPro: ['Source Code Pro', 'monospace'],
        // Ref: https://github.com/phaserjs/phaser/issues/2390
        // Have to add on extra layer of quote for fonts with digits inside.
        PS2P: ['"Press Start 2P"', 'system-ui'],
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },
  plugins: [],
};
