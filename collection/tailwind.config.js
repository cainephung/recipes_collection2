/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        'spin-slow': 'spin 1s linear 2',
        'pulse-slow': 'pulse 1s linear 2',
        'ping-slow': 'ping 1s linear 2',
        'bounce-slow': 'bounce 1s linear 2',
        wiggle: 'wiggle 1s ease-in-out infinite ',
        

      }
    },
  },
  plugins: [],
}
