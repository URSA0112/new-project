/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Add this to scan all src files
  ],
  theme: {
    extend: {},
    screens: {
      xs: "300px", // Custom extra small screen (before sm)
      sm: "640px", // Small (default)
      md: "768px", // Medium
      lg: "1024px", // Large
      xl: "1280px", // Extra large
    },
  },
  plugins: [],
};