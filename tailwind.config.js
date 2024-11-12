/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pregular: ["NanumMyeongjo-Regular", "sans-serif"],
        pbold: ["NanumMyeongjo-Bold", "sans-serif"],
        pextrabold: ["NanumMyeongjo-ExtraBold", "sans-serif"],
      },


    },
  },
  plugins: [],
}

