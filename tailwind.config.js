/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        chronicls: {
          black: '#0a0a0a',
          white: '#ffffff',
          cream: '#f5f1ed',
          accent: '#d4a574',
        },
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
