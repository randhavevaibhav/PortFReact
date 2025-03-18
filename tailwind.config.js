/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["selector"],
  theme: {
    extend: {
      screens: {
        xs: "300px",
      },
      height: {
        header: "var(--header-height)",
      },
      width: {
        brand_logo: "var(--brand-logo-width)",
      },
      colors: {
        primary: "var(--text_primary)",
        background: "var(--background)",
        text_weak:"var(--text_weak)",
        base_surface:"var(--bg_base_surface)"
      },
      fill: {
        iconfill: "var(--icon_fill)",
      },
      stroke: {
        iconstroke: "var(--icon_stroke)",
      },
      borderColor: {
        themeborder: "var(--theme_border)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography",)],
};
