/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    listStyleType:{
      square: 'square',
    },
    extend: {  
      flex: {
      '2': '2 2 0%',
      '3': '3 3 0%',
      
    },
    backgroundImage: {
      'banner': 'url("/banner-4.jpg")',
  
    },
  
    colors:{
   bgcolor:'rgb(239,239,239)',
      blackk:"rgb(26,26,33)"
    
    }
      
    },
    screens: {
      'xl': {'max': '1160px', },
      
      'lg': {'max': '960px', },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'mmd': { 'max': '860px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      'sm': { 'max': '640px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'xs': { 'max': '480px'},
      
    },
  },
  plugins: [],
}
