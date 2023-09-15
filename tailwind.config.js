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
        "brand-1": "#F4E04D",
        "brand-2": "#F2ED6F",
        "brand-3": "#CEE397",
        "brand-4": "#8DB1AB",
        "brand-5": "#587792",
      },
    },
  },
  plugins: [],
};