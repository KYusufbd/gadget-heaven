/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    fontFamily: {
      'sans': ['Sora', ...defaultTheme.fontFamily.sans]
    },

    extend: {},
  },

  plugins: [
    require('daisyui'),
  ],
}

