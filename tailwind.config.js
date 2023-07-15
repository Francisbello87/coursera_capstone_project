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
        secondaryColor: "#EDEFEE",
        brownColor: "#333333",
        facebookColor: "#4267B2",
        twitterColor: "#1DA1F2",
        instagramColor: "#E1306C",
        yellowColor: "#f6d964"
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
