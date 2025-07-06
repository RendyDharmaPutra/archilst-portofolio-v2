import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#F8FAFC",
          dark: "#0D1117",
        },
        text: {
          DEFAULT: "#1E293B",
          dark: "#F9FAFB",
          secondary: {
            DEFAULT: "#64748B",
            dark: "#F9FAFB",
          },
          muted: {
            DEFAULT: "#94A3B8",
            dark: "#F9FAFB",
          },
        },
        accent: "#0080FF",
        card: {
          DEFAULT: "#ffffff",
          dark: "#161B22",
        },
        header: {
          DEFAULT: "#F8FAFC",
          dark: "#0D1117",
        },
        footer: {
          DEFAULT: "#E2E8F0",
          dark: "#0A0E13",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
