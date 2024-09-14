/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mantis: {
          50: "#f6faf3",
          100: "#e9f5e3",
          200: "#d3eac8",
          300: "#afd89d",
          400: "#82bd69",
          500: "#61a146",
          600: "#4c8435",
          700: "#3d692c",
          800: "#345427",
          900: "#2b4522",
          950: "#13250e",
        },
      },
    },
  },
  plugins: [],
};
