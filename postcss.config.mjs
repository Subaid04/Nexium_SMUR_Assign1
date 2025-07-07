const config = {
  plugins: {
    "@tailwindcss/postcss": {
      sources: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
    },
  },
};
export default config;
