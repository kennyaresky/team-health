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
      "blue-secondary" : "hsl(224, 70%, 64%)",
      "grey":"hsl(0, 0%, 85%)",
      "green-primary-light": "hsl(165, 91%, 65%)",
      "blue-secondary-dark" : "hsl(224, 73%, 53%)",
    }
  } 
  },
  plugins: [],
}

