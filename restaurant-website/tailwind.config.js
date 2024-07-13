/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ligjtGray: "#758694",
        white2: "#FFF8F3",
        darkNavy: "#F7E7DC",
        creamBeige: "#F7E7DC",
      },
      fontFamily: {
        notosans: ["Notosans"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rems",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
