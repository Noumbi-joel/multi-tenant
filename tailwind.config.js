const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        orange: "#FE964A",
        blue: "#0062FF",
        purple: "#8C62FF",
        amber: "#FFC837",
        primary: {
          base: "#3769F1",
          400: "#B9ADF7",
          300: "#CBC2FB",
          200: "#EEF3FF",
          100: "#EEEBFE",
        },
        secondary: {
          base: "#2CD4D9",
          400: "#AAEEEF",
          300: "#C0F2F3",
          200: "#D4F6F7",
          100: "#EBFBFB",
        },
        success: {
          base: "#0CAF60",
          light: "#55C790",
          dark: "#0BA259",
        },
        warning: {
          base: "#FFD023",
          light: "#FFDE65",
          dark: "#E6BB20",
        },
        alert: {
          base: "#FD6A6A",
          light: "#FD8181",
          dark: "#FD4F4F",
        },
        grayscale: {
          50: "#FAFAFA",
          100: "#F9FAFB",
          200: "#F1F2F4",
          300: "#EEEFF2",
          400: "#CBD5E0",
          500: "#A0AEC0",
          600: "#718096",
          700: "#4A5568",
          800: "#2D3748",
          900: "#1A202C",
          8080: "#808080",
        },
      },
    },
  },
  plugins: [],
};
