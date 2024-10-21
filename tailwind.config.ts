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


      },
      fontFamily: {
        sans: ["Inter var", "system-ui", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
