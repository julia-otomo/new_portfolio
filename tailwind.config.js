/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: { sm: "375px", md: "768px", lg: "1024px", xl: "1440px" },
    extend: {
      colors: {
        "grey-0": "#0A0A0B",
        "grey-1": "#1D1D20",
        "grey-2": "#26262B",
        "grey-3": "#303036",
        "grey-4": "#4D4D56",
        "grey-5": "#EBEBEB",
        "grey-6": "#F5F5F5",
        "grey-7": "#E0E0E0",
        "brand-1": "#79F6F6",
        "brand-2": "#F2ED6F",
        "brand-3": "#CEE397",
        "brand-4": "#8DB1AB",
        "brand-5": "#23195F",
        "brand-6": "#181140",
        "brand-7": "#2B2D42",
      },
      animation: {
        gradient: "gradientAnimation 4s ease infinite",
      },
      keyframes: {
        gradientAnimation: {
          "0%": {
            "background-size": "200%",
            backgroundPosition: "0% 50%",
          },
          "50%": { backgroundPosition: "100% 50%", "background-size": "200%" },
          "100%": {
            "background-size": "200%",
            backgroundPosition: "0% 50%",
          },
        },
      },
    },
  },
  plugins: [],
};
