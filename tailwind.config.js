/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      scale: {
        '115': '1.15',
        '120': '1.20',
      },
      borderRadius: {
        '4xl': '4.0rem',
        '5xl': '7.5rem',
      },
      screens:{
        'lg': '1025px',
      },
      colors: {
        JcBG: {
          100: '#DFE0E4',
        },
      },

    },
    fontFamily: {
      sans: ["Rubik", "system-ui", "SF Pro SC", "Helvetica", "Arial"],
    },
  },
  plugins: [],
};

