import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#f9f9f9",
        surface: "#f9f9f9",
        "surface-bright": "#f9f9f9",
        "surface-container-low": "#f3f3f4",
        "surface-container-lowest": "#ffffff",
        "surface-container": "#eeeeee",
        "surface-variant": "#e2e2e2",
        "border-low-contrast": "#eeeeee",
        "text-muted": "#666666",
        primary: "#000000",
        "on-primary": "#ffffff",
        "on-background": "#1a1c1c",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      spacing: {
        "margin-mobile": "20px",
        "section-gap": "80px",
        "container-max": "800px",
        "container-wide": "1120px",
        "element-gap": "16px",
        gutter: "24px",
      },
      fontFamily: {
        body: ["var(--font-inter)", "sans-serif"],
        heading: ["Geist", "var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "1.4", fontWeight: "500" }],
        "label-md": ["14px", { lineHeight: "1.4", fontWeight: "500" }],
        "section-title": ["14px", { lineHeight: "1.5", letterSpacing: "0.1em", fontWeight: "700" }],
        "headline-lg-mobile": ["24px", { lineHeight: "1.2", fontWeight: "600" }],
        "headline-lg": ["32px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "500" }],
        "headline-xl": ["48px", { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "600" }],
      },
    },
  },
  plugins: [],
};

export default config;
