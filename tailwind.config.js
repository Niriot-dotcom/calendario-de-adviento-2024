/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["Helvetica"],
        kepler: ["kepler-std-display"],
        latino: ["latino-gothic-variable"],
      },
      colors: {
        beige: "#fff7f2",
        vianney: {
          400: "#EDE3EC",
          500: "#BA90B5",
          600: "#76236D",
          700: "#501449",
        },
      },
      gridTemplateColumns: {
        24: "repeat(24, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        16: "repeat(16, minmax(0, 1fr))",
        36: "repeat(36, minmax(0, 1fr))",
      },
      screens: {
        xs: "410px",
      },
    },
  },
  plugins: [],
};
