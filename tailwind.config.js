/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      letterSpacing: {
        veryWide: "0.4rem",
      },
      cursor: {
        grab: "grab",
      },
    },
  },
  plugins: [],
};
