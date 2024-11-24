/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "rgb(85, 166, 48)",
        darkBlue: "rgb(67, 64, 180)",
        lightGreen1: "rgb(0, 168, 150)",
        lightBlack: "rgb(66, 66, 66)",
        lightGreen2: "#ECFFEB",
        blueBg: "rgba(83, 81, 196, 0.1)",
        greenBg: "rgba(0, 168, 150, 0.1)",
        lightGray: "rgb(133, 133, 133)",
      },
    },
  },
  plugins: [],
};
