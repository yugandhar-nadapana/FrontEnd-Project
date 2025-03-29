/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // ✅ Make sure this path is correct
  theme: {
    darkMode: 'class',
    extend: {},
  },
  // plugins: [
  //   require('tailwindcss-dark-mode')()
  // ],
  // // To enable dark mode for all classes:
  // variants: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
};
