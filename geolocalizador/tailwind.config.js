/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          light: "#F0EAD6",       // beige claro
          dark: "#2F3E2E",        // verde bosque profundo
        },
        accent: {
          primary: "#A9D18E",     // verde oliva suave
          hover: "#769E60",       // hover verde más fuerte
        },
        alert: {
          success: "#DFF2BF",
          error: "#FFD2D2",
          warning: "#FEEFB3",
          info: "#BDE5F8",
        },
        borderAlert: {
          success: "#A9D18E",
          error: "#D8000C",
          warning: "#9F6000",
          info: "#00529B",
        },
        textAlert: {
          success: "#4F704F",
          error: "#D8000C",
          warning: "#9F6000",
          info: "#00529B",
        },
      },
    },
  },
  plugins: [],
};
