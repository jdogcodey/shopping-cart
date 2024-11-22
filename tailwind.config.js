/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        cardlayout: "1fr 1fr 2fr 2fr",
        basketlayout: "5fr 1fr",
      },
      gridTemplateRows: {
        cardlayout: "40px 140px 60px",
      },
    },
  },
  plugins: [],
};
