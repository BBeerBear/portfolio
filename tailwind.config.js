/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: { 'my-bg': "url('/src/assets/img/1099191.jpg')" },
    },
  },
  plugins: [],
};
