/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.{js,jsx}",
    "./resources/js/**/*.{jsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#747264",
        tulisanputih: "#FFF",
      },
      zIndex: {
        fullDepan: "9999",
      },
      inset: {
        "5persen": "5%",
        "2persen": "2%",
        "10persen": "8%",
      },
      transitionDuration: {
        "0.3s": "0.3s",
      },
      transitionTimingFunction: {
        "3linear": "0.3s linear",
      },
      transformOrigin: {
        "00": "0 0",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("flowbite/plugin")],
};
