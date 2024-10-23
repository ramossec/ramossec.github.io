/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      backgroundImage:{
        'tech': "url('https://img.freepik.com/free-photo/cyber-security-concept-digital-art_23-2151637760.jpg?t=st=1727037742~exp=1727041342~hmac=cd6f0947edd1581a1b2eb3ffcc63198877f7bd9d1411580d128148513a4aba12&w=1480')",
        'motion-back':"url('/images/bg-motion.gif')"      
      }
    },
  },
  plugins: [],
};
