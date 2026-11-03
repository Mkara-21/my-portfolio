/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#fdf2f8',    
          metallic: '#d88c9a', 
        },
        maroon: {
          DEFAULT: '#800000',  
          dark: '#4a0000',     
        },
        rosegold: {
          DEFAULT: '#b76e79',  
        },
      },
    },
  },
  plugins: [],
};