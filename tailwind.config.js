/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        text: "text 5s ease infinite",
        "border-gradient": "border-gradient 3s linear infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        "border-gradient": {
          "0%": { "border-color": "red" },
          "25%": { "border-color": "blue" },
          "50%": { "border-color": "green" },
          "75%": { "border-color": "purple" },
          "100%": { "border-color": "red" },
        },
      },
    },
  },
  plugins: [],
};
