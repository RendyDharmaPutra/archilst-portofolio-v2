import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          accent: {
            DEFAULT: "#0080FF", // Biru utama
            dark: "#0066CC", // Biru lebih gelap untuk mode dark
          },
          text: {
            DEFAULT: "#0A0A0A", // Teks utama terang di mode light
            dark: "#EAEAEA", // Teks utama terang di mode dark
          },
          background: {
            DEFAULT: "#F5F7FA", // Light background agak kebiruan
            dark: "#0D1117", // Dark background gelap
          },
        },
        secondary: {
          accent: {
            DEFAULT: "#00B2FF", // Biru sekunder lebih terang
            dark: "#3399FF", // Biru medium untuk dark mode
          },
          text: {
            DEFAULT: "#1E293B", // Abu kebiruan untuk teks sekunder
            dark: "#A0AEC0", // Abu kebiruan terang di dark mode
          },
          background: {
            DEFAULT: "#E2E8F0", // Abu kebiruan terang
            dark: "#1F2937", // Abu kebiruan gelap
          },
        },
        tertiary: {
          accent: {
            DEFAULT: "#4ADE80", // Hijau aksen (misalnya untuk highlight info)
            dark: "#22C55E", // Hijau gelap untuk dark mode
          },
          text: {
            DEFAULT: "#374151", // Abu tua
            dark: "#9CA3AF", // Abu terang di dark mode
          },
          background: {
            DEFAULT: "#F3F4F6", // Abu netral terang
            dark: "#2D2D2D", // Abu gelap
          },
        },
        border: {
          DEFAULT: "#CBD5E1", // Abu terang
          dark: "#475569", // Abu gelap
        },
        success: {
          DEFAULT: "#16A34A", // Hijau sukses
          dark: "#22C55E", // Hijau sukses terang
        },
        danger: {
          DEFAULT: "#DC2626", // Merah bahaya
          dark: "#EF4444", // Merah bahaya terang
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
