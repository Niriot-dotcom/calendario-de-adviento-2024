/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
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
