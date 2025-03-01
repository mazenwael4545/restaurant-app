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
        "custom-orange-1": "#f19447",
        "custom-orange-2": "#f3a059",
        "custom-orange-3": "#f5ab6a",
        "custom-orange-4": "#f7b77d",
        "custom-orange-5": "#f8c28f",
      },
    },
  },
  plugins: [],
} satisfies Config;
