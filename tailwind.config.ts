import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/*",
    './node_modules/@nextui-org/theme/dist/components/(*).js'
  ],
  darkMode: "class",
  theme: {
    extend: {
      color: {
        body: "var(--color-body)",
        custom: {
          background: "var(--color-background)",
        },
        text: "var(--color-text)"
      },
    },
    animation: {
      ["infinite-slider"]: "infiniteSlider 20s linear infinite",
    },
    keyframes: {
      infiniteSlider: {
        "0%": { transform: "translateX(0)" },
        "100%": {
          transform: "translateX(calc(-250px * 5))",
        },
      },
    },
  },
  plugins: [nextui()],
};
export default config;
