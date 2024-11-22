import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bkg: "#5E503F",
        foreground: "var(--foreground)",
        clicked: "#D9D9D9",
        textclicked: "#948078",
        toast: "#D2D4C8"


      },
      fontFamily: {
        sans: ["Inter var", "system-ui", "sans-serif"],
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
};
export default config;
