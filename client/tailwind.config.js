/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      "green-primary" : "hsl(165, 100%, 40%)",
      "blue-secondary" : "hsl(224, 70%, 64%)"
    }
  } 
  },
  plugins: [],
}

