import { transformWithEsbuild } from "vite";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#ebf6f0",
        background: "#171c28",
        primary: "#1d2433",
        secondary: "#2d4377",
        secondaryRed: "#9E1829",
        accent: "#49F67A",
        secondaryAccent: "#ffd580",
        cassetteBackground: "#9E1829",
      },
      fontFamily: {
        inria: ["inria", "serif"],
        poppins: ["Poppins", "Sans-Serif"],
      },
      animation: {
        showProjectTab: "showProjectTab 650ms ",
      },
      keyframes: {
        showProjectTab: {
          "0%": {
            top: "2px",
            right: "10px",
            transform: "translateY(55%) translateX(-80%)",
          },
        },
      },
    },
  },
  plugins: [],
};
