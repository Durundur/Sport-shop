/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'orange-primary': '#ff7522',
        'orange-secondary': '#F35B00',
        'black-primary': '#202020',
        'white-primary': '#fff',
        'gray-primary': '#F6F7F8',
        'blue-primary': '#3987D4',
        'gray-primary': '#F6F6F6',
        'green-primary': '#37BC9B',
        'green-secondary': '#2D987E',
      }
    },
  },
  plugins: [],
}
