/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,php}", // Adjust paths as needed
    "./public/index.html",
    "./**/*.php",
  ],
  theme: {
    extend: {
      // Add custom theme configurations here
    },
  },
  plugins: [
    // Add Tailwind plugins here
  ],
};
