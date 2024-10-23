/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/parts/**/*.{js,jsx,ts,tsx}`

  ],
  theme: {
    extend: {
      backgroundImage:{
        'tech': "url('@images/cyber-security-concept-digital-art.jpg')",
        'motion-back':"url('@images/bg-motion.gif')"      
      }
    },
  },
  plugins: [],
};
