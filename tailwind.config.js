/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: { min: "992px" },
    },
    extend: {
      fontFamily: {
        majorMono: ['"Major Mono Display"'],
      },
    },
  },
  plugins: [],
};
