import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'valentine-red': '#ff6384',
        'valentine-pink': '#ffcad4',
        'valentine-dark': '#3d2c3c'
      },
      fontFamily: {
        'body': ['"Nunito"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} as Config;
