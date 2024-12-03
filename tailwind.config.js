/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      sans: ["Sora", ...defaultTheme.fontFamily.sans],
    },

    fontSize: {
      "3xl": "32px",
    },

    extend: {
      colors: {
        primary: "#9538E2",
        bgcol: "#F6F6F6",
        txtcol: "#09080F",
      },
      spacing: {
        "page-width": "1280px",
        "banner-width": "1110px",
      },
    },
  },

  plugins: [require("daisyui")],
};
