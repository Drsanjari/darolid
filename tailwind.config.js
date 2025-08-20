/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        brand: { primary: "#00B8D9", secondary: "#27AE60", dark: "#0F172A" },
      },
      borderRadius: { xl2: "1rem" },
      boxShadow: {
        card: "0 8px 30px rgba(0,0,0,.06)",
        soft: "0 6px 16px rgba(15,23,42,.06)",
      },
      backgroundImage: {
        "hero-grad":
          "radial-gradient(60% 60% at 100% 0%, rgba(0,184,217,.18) 0%, rgba(39,174,96,.12) 50%, transparent 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
