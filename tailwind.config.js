/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        blog:{
          blue: '#1DA1F2'
        },
      },
      spacing:{
        navItem: '0.425rem'
      }
    },
  },
  plugins: [],
};
