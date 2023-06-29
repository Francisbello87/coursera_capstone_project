/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla"],
        Markazi: ["Markazi Text"],
      },
      colors: {
        primaryColor: "#495E57",
        pryColor: "#F4CE14",
        priceColor: "#EE9972",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
