/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderRadius:{
      '4xl':'2.5rem'
    },
    extend: {
      backgroundColor: {
        'default': '#171717',
      },
    },
  },
  plugins: [],
}

