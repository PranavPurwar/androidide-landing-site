/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        winter: {
          ...require("daisyui/src/colors/themes")["[data-theme=winter]"],
          primary: "#F44336",
          "primary-focus": "#E14336",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#F44336",
          "primary-focus": "#E14336",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
