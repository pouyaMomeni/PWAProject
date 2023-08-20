/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg1: "url('./assets/img/login/18_2.jpg')",
        i: "url('./assets/img/login/iran.jpg')",
      },
      colors: {
        "primary-main": "#65B554",
        "warning-main": "#FF7A00",
        "primary-green": "#65B554",
        "light-1": "#49454F",
        "light-2": "#79747E",
        "error-dark": "#FF002D",
      },
    },

    fontFamily: {
      "iran-medium": "iran-medium",
      "iran-reg": "iran-reg",
      "iran-ligh": "iran-light",
      "iran-bold": "iran-bold",
      "iran-semibold": "iran-semibold",
      "iran-extrabold": "iran-extrabold",
    },
  },
  plugins: [],
};
