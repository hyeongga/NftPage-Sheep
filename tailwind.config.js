/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        paper: "url('/img/paper.jpg')",
        craft: "url('/img/mine.png')",
        grass: "url('/img/green.jpg')",
      },
    },
  },
  plugins: [],
};
