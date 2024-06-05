import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        rubberBand: {
          '0%': {
            transform: 'scale(1)',
          },
          '30%': {
            transform: 'scale(1.25, 0.75)',
          },
          '40%': {
            transform: 'scale(0.75, 1.25)',
          },
          '50%': {
            transform: 'scale(1.15, 0.85)',
          },
          '65%': {
            transform: 'scale(0.95, 1.05)',
          },
          '75%': {
            transform: 'scale(1.05, 0.95)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-100% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        rubberBand: 'rubberBand 1s',
        shimmer: 'shimmer 1.5s infinite linear',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
