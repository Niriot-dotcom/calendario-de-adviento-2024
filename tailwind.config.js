/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  scale: {
    flip: "-1",
  },
  theme: {
    extend: {
      screens: {
        xs: "410px",
      },
      animation: {
        "bounce-smooth": "bounceSmooth 2s infinite",
      },
      keyframes: {
        bounceSmooth: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      colors: {
        agreen: "#226f54",
        abeige: "#f2e8cf",
        ared: "#aa182d",
      },
    },
  },
  plugins: [],
};
