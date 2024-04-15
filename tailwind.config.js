/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#ebf6f0",
        darkText: "#050A30",
        background: "#11222F",
        primary: "#18D8E4",
        secondary: "#1b2720",
        accent: "#49F67A",
      },
      fontFamily: {
        inria: ["inria", "serif"],
        poppins: ["Poppins", "Sans-Serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://c4.wallpaperflare.com/wallpaper/984/1004/39/pixel-art-chair-computer-pixels-wallpaper-preview.jpg')",
      },
    },
  },
  plugins: [],
};
