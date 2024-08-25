import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
  },
  plugins: [],
};
export default config;
