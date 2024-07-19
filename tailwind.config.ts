import type { Config } from "tailwindcss";

const config: Config = {
  mode:'jit',
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
        "secondaryDark": "#d1ae3d",
        "secondaryDarker": "#a8781e"
        
      },
      spacing:{
        "22": "22%"
      },
      boxShadow:{
        "default": "0px 0px 10px 0px rgba(247,228,72,0.75);",
        "inside": " inset 0px 0px 2px 0px rgba(255,255,255,1);"
      }
    },
  },
  plugins: [],
};
export default config;
