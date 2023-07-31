/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "darkBg": "#151515",
      "lightGreen": "#4EE1A0",
      "darkGrey" : "#242424",
      "lightGrey": "#D9D9D9",
      "white": "#FFFFFF"
    },
    fontFamily: {
      spaceGrotesk: ["Space Grotesk", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}

