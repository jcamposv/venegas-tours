/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        jungle: { DEFAULT: "#1a4d2e", dark: "#0f3020", light: "#2d6b45" },
        leaf: { DEFAULT: "#4ea857", light: "#6cc274", dark: "#3a8944" },
        sun: { DEFAULT: "#f4c531", dark: "#d9ac1f", light: "#fad65b" },
        sea: { DEFAULT: "#3bb0b5", light: "#5fc9ce", dark: "#2a8d91" },
        cream: "#faf6ed",
        sand: "#f0e8d6",
        charcoal: "#1a2a1f",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
        display: ['"Fraunces"', "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
