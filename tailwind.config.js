/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'black': '#000000',
        'purple': '#222646',
        'purple-light': '#242B51',
        'pink': '#EE1B59',
        'pink-dark': '#d11149',
        'green': '#55C554'
      },
    }
  },
  plugins: [],
}

