/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderRadius: {
      '4xl': '2.5rem',
    },
    extend: {
      backgroundColor: {
        default: '#171717',
      },
      backgroundImage: {
        'login-image': "url('./src/assets/Rectangle13.svg')",
      },
      backgroundRepeat: {
        'no-repeat': 'no-repeat',
      },
      backgroundSize: {
        cover: 'cover',
      },
      fill: {
        fill: '#171717',
      },
      minHeight: {
        footer: '119px',
      },
      width: {
        'max-w-header': '82.5rem',
      },
      margin: {
        '450px': '450px',
      },
    },
  },
  plugins: [],
};


