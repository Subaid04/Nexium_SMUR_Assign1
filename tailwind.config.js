/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx,json}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        background: "var(--background)",
        "muted-foreground": "var(--muted-foreground)",
        brand: {
          DEFAULT: "#1e40af", // Navy Blue
          light: "#60a5fa", // Light Blue
          dark: "#1e3a8a", // Darker Blue
        },
        peach: "#ffb3ab",
        softBlack: "#121212",
        softWhite: "#f8f9fa",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        orbitron: ["var(--font-orbitron)", "sans-serif"], // ✨ Orbitron
      },
    },
  },
  darkMode: "class", // or 'media' if you want automatic dark mode
  plugins: [],
};
