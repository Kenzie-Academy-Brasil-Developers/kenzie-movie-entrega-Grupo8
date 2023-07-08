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
      height: {
        'footer': '119px',
        'cards': '4'
      },
      width:{
        'max-w-header':'1320px'
      },
      margin:{
        '450px': '450px'
      },
      
    },
    
  },
  plugins: [],
};

