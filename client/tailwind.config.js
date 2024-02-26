/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3C3633",
      },
      zIndex: {
        fullDepan: 9999,
      },
      inset: {
        "5persen": "5%",
      },
      transitionDuration: {
        "0.3s": "0.3s",
      },
      transitionTimingFunction: {
        "3linear": "0.3s linear",
      },
    },
  },
  plugins: [],
};
