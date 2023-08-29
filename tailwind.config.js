/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          100: "#f2ebeb",
          200: "#e9e9e9",
        },
        white: "#fff",
        black: "#000",
        darkgrey: "#464545", //text color
        "btn-green": "#71b665", //bg-green-500
        "btn-green-hover": "#4ea041", //bg-green-600
        "hero-bg-color": "rgba(199, 215, 196, 0.8)",
        "hero-bg-accent": "rgba(161, 220, 150, 0.8)",
        mintcream: "rgba(243, 248, 242, 0.8)", //introduction-bg
        darkmintcream: "rgb(78,105,115)",
        "tesimonial-text-bg-color": "#efefef",
        "form-input-bg": "rgba(235, 241, 234, 0.8)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        lato: "Lato",
        "bonheur-royale": "'Bonheur Royale'",
        amarante: "Amarante",
        inter: "Inter",
        "grand-hotel": "'Grand Hotel'",
        "noto-sans": "Noto Sans SC",
      },
      fontSize: {
        // "intro-clamp": 'clamp(3.75rem, 3.4741379310344827rem + 1.3793103448275863vw, 5rem)'

        "intro-clamp":
          "clamp(3rem, 2.5586206896551724rem + 2.206896551724138vw, 5rem)",
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
