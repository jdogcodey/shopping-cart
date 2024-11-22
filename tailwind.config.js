/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        cardlayout: "1fr 1fr 1fr 1fr",
        basketlayout: "5fr 1fr",
      },
      gridTemplateRows: {
        cardlayout: "40px 120px 40px",
      },
    },
  },
  plugins: [],
};
