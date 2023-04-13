/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blog: {
          blue: '#1DA1F2',
          darkBlue: '#057fcb',
          gray: '#AAB8C2',
          lightGray: '#AAB8C2',
        },
      },
      spacing: {
        navItem: '0.425rem',
      },
      boxShadow: {
        banner:
          'inset 0 8px 8px -8px rgb(0 0 0 / 30%), inset 0 -8px -8px -8px rgb(0 0 0 / 30%) ',
      },
      dropshadow: {
        logo: '0px 1px 3px rgb(0 0 0 / 30%)',
      },
    },
  },
  plugins: [],
};
