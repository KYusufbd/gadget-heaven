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

    extend: {
      colors: {
        'primary': '#9538E2'
      },
      spacing: {
        'page-width': '1280px',
        'banner-width': '1110px'
      }
    },
  },

  plugins: [
    require('daisyui'),
    'prettier-plugin-tailwindcss'
  ],
}

