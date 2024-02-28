/*eslint-env node*//** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['var(--font-raleway)', 'sans-serif'],
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
      height: {
        128: '40rem',
      },
      minHeight: {
        128: '40rem',
      },
    },
  },
  plugins: [],
};
