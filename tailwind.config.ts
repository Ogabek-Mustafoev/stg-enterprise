import {nextui} from "@nextui-org/react";
import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: '420px',
      sm: '640px',
      md: '768px',
      xlg: "860px",
      lg: '1024px',
      xl: '1280px',
      "2xl": "1400px",
      "3xl": "1600px",
    },
    extend: {
      colors: {
        primary: "#E23C36",
        light: "#F1F1F1",
        secondary: "#1D3044",
      }
    },
  },
  safelist: [
    "text-blue-500 drop-shadow-sm"
  ],
  corePlugins: {
    container: false
  },
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: "#FF0000",
        }
      }
    }
  })],
};
export default config;
