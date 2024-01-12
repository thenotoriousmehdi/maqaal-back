/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend : { 


    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    }
    ,colors: {
      'transparent': 'transparent',
      'current': 'currentColor',
      'primary' : '#2E4165', 
      'rosee' : '#FF6F61', 
      'beige' : '#F5F5DC',
      'bgr' : '#FAFBFD'

    },
    fontFamily: {

      body : 'Quicksand' ,
      title :  'Raleway'

    } , 
    backgroundOpacity: {
     
      '6' : '0.06' ,
      '7': '0.07'
    },}
  },
  plugins: [],
}
