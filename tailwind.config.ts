import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#00B8D9",   // آبی فیروزه‌ای
          secondary: "#27AE60", // سبز طبیعت
          dark: "#003F5C",      // آبی تیره (CTA)
          gray: "#4A4A4A",      // خاکستری متن
          white: "#FFFFFF",
        },
      },
      borderRadius: {
        'xl2': '1rem', // برای دکمه‌ها و کارت‌ها
      },
      boxShadow: {
        soft: "0 4px 16px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
