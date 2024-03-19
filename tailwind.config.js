/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgImage: "url('./src/assets/react.svg')",
        scenre: "url('https://images.app.goo.gl/uEW4kvbeRnt5nbyU9')",
      },
    },
  },
  plugins: [],
};
