import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'], // keep as default
        poppins: ['var(--font-poppins)', 'sans-serif'],
        custom: ['MyCustomFont', 'sans-serif'], // 👈 your custom font class
      },
    },
  },
  plugins: [],
};

export default config;
