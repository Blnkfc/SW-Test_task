import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        appear:{
          '0%':{opacity: "0", scale: "0.8"},
          '100%':{opacity: "1", scale: "1" }
        }
      },
      animation:{
        "appear":"appear linear "
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "black": "#000",
        "white": "#fff",
        "backgroundDark": "#2c2d2e",
        "secondary": "#f7e448",
        
      },
      spacing:{
        "22": "22%"
      },
      boxShadow:{
        "default": "0px 0px 10px 0px rgba(247,228,72,0.75);"
      }
    },
  },
  plugins: [],
};
export default config;
