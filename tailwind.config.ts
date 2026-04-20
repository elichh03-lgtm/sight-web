import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A2540",
          50: "#F2F5F9",
          900: "#0A2540",
        },
        violet: {
          DEFAULT: "#635BFF",
          600: "#5851EA",
          700: "#4B45C7",
        },
        surface: "#F6F9FC",
        slate: {
          body: "#3C4858",
          muted: "#5B6B82",
          line: "#E3E8EF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1120px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,37,64,0.04), 0 4px 16px rgba(10,37,64,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
