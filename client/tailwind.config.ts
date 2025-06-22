import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
          sans: ['var(--font-cormorant)', 'serif'],
  cormorant: ['var(--font-cormorant)', 'serif'],// 👈 your custom font class
      },
    },
  },
  plugins: [],
};

export default config;
