/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: '#957554',
        customRgb: 'rgb(224, 170, 91)', 
        colorbutton:'#000008',
        colorfacility:'#957554',
      },
      backgroundColor: { // Ajoutez la définition pour le background-color
        'custom-rgb': 'rgb(224, 170, 91)', // Utilisation de camelCase
      },
    },
  },
  plugins: [],
};