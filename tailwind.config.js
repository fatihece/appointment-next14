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
        ruth: {
          50: "#faf5f8",
          100: "#f7ecf2",
          200: "#f0dae7",
          300: "#e4bdd3",
          400: "#d393b6",
          500: "#c2729d",
          600: "#ab537d",
          700: "#934367",
          800: "#7a3a56",
          900: "#67344a",
          950: "#3d1a29",
        },
      },
    },
  },
  plugins: [],
};
