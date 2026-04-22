import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#E8E8E8",
        surface: "#F4F4F4",
        card: "#FFFFFF",
        ink: "#222222",
        muted: "rgba(34, 34, 34, 0.60)",
        line: "rgba(34, 34, 34, 0.10)",
        lineStrong: "rgba(34, 34, 34, 0.18)",
        oxblood: {
          DEFAULT: "#8B1F1F",
          600: "#7A1A1A",
          soft: "rgba(139, 31, 31, 0.10)",
        },
        tintPeach: "#F2E6DA",
        tintSage: "#E6EDE4",
        tintSky: "#DFE6F1",
        error: "#D93025",
        success: "#2F7D4C",
        warning: "#D68E1C",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter-tight)", "var(--font-inter)", "system-ui", "sans-serif"],
        serif: ['"Iowan Old Style"', '"Palatino Linotype"', "Palatino", "Georgia", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
