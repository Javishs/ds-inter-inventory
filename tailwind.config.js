/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#1A1D21',  
          orange: '#FF6600', 
          green: '#22C55E',  
          grey: '#64748B',   
          white: '#FFFFFF',  
          bg: '#F1F5F9',     
        }
      }
    },
  },
  plugins: [],
}