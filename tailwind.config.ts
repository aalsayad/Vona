/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // Add custom percentage-based utilities for top and left
      top: {
        "5%": "5%",
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "50%": "50%",
        "55%": "55%",
        "60%": "60%",
      },
      left: {
        "5%": "5%",
        "10%": "10%",
        "15%": "15%",
        "20%": "20%",
        "50%": "50%",
        "55%": "55%",
        "60%": "60%",
      },
    },
  },
};
