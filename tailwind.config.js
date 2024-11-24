/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        gray: {
          1: "#F3F3F4",
          2: "#F0F0F0",
          3: "#7E7E7E",
          4: "#A0A0A0",
          5: "#545454",
        },
      },
    },
  },
  plugins: [],
};
