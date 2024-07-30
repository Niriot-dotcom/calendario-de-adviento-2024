/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["Helvetica"],
        kepler: ["kepler-std-display"],
        latino: ["latino-gothic-variable"],
        ivy: ["kepler-std-display"],
      },
      colors: {
        agreen: "#226f54",
        abeige: "#f2e8cf",
        ared: "#aa182d",
      },
      screens: {
        xs: "410px",
      },
    },
    scale: {
      flip: "-1",
    },
  },
  plugins: [],
};
