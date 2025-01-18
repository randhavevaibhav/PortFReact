/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      screens: {
        'xs': '300px',
      },
      colors:{
        primary:"var(--text_primary)",
        background:"var(--background)"
      },
      fill:{
        iconfill:"var(--icon_fill)"
      }
      
    },
  },
  plugins: [],
}

