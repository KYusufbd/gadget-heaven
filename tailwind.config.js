/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      sans: ["Sora", ...defaultTheme.fontFamily.sans],
    },

    extend: {
      colors: {
        primary: "#9538E2",
        bgcol: "#F6F6F6",
      },
      spacing: {
        "page-width": "1280px",
        "banner-width": "1110px",
      },
    },
  },

  plugins: [require("daisyui")],
};
