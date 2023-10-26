/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    colors: {
      "white": "#FFFFFF",
      "aquamarine": {
        100: "#73EAF1",
        200: "#5EBCC1"
      },
      "dark-blue": "#080E21",
      "gray-blue": "#12182A",
      "green": "#B1E55C",
      "gray-white": "#1f2738"
    },
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif'],
      'lato': ['Lato', 'sans-serif']
    },
    backgroundImage: {
      'services-banner': "url(./src/assets/images/bg-services-1.webp)"
    }
  },
  plugins: [],
}

