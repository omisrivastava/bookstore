/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'; // Import daisyui

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui, // Use the imported daisyui
  ],
  // Optional: Add DaisyUI configuration if needed
  daisyui: {
    themes: ["light", "dark", "cupcake"], // Add your preferred themes here
  },
};