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
        'spin-once': 'spin 1s linear 1',
        'pulse-once': 'pulse 1s linear 1',
        'ping-once': 'ping 1s linear 1',
        'bounce-once': 'bounce 1s linear 1',
        wiggle: 'wiggle 1s ease-in-out infinite ',
        

      }
    },
  },
  plugins: [],
}
