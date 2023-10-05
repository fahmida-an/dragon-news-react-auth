/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
     dark1: '#706F6F',
     dark2: '#403F3F',
     dark3: '#9F9F9F',
     pink1: '#D72050',
     white: '#FFFFFF',
     gray: '#F3F3F3',
     blue: '#1fb6ff'
    },

    extend: {
      fontFamily: {
        display: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
