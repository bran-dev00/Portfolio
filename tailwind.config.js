/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#164863",
        secondary: "#427D9D",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://c4.wallpaperflare.com/wallpaper/984/1004/39/pixel-art-chair-computer-pixels-wallpaper-preview.jpg')",
      },
    },
  },
  plugins: [],
};
