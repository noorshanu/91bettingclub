/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'promotion-bg': "url('/images/promotionbg-9dcd78e9.png')",
      })
    }
  },
  plugins: [],
}

