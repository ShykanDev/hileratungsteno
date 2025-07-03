/** @type {import('tailwindcss').Config} */
import tailwindcssanimated  from 'tailwindcss-animated'
export default {
  content: [
	"./index.html",
	"./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
	extend: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'mulish': ['Mulish', 'sans-serif'],
    }
  },
  },
  plugins: [tailwindcssanimated],
}
