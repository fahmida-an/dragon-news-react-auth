/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
     dark1: '#706F6F',
     dark2: '#403F3F',
     dark3: '#9F9F9F',
    },

    extend: {
      fontFamily: {
        display: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
