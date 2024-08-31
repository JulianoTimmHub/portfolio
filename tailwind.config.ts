import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/Tabs.js",
    "./node_modules/@nextui-org/theme/dist/components/Tab.js",
    "./node_modules/@nextui-org/theme/dist/components/Card.js",
    "./node_modules/@nextui-org/theme/dist/components/CardBody.js",
    './node_modules/@nextui-org/theme/dist/components/(Tabs|Tab|Card|CardBody).js'
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
  plugins: [nextui()],
};
export default config;
