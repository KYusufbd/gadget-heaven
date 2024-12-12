/* eslint-disable no-undef */
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
        txtcol: "#09080F",
        secondary: "#9538E2",
      },

      spacing: {
        "page-width": "1280px",
        "banner-width": "1110px",
      },

      fontSize: {
        "3xl": "2rem",
      },
    },
  },

  plugins: [require("daisyui")],
};
