import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1B1B1D",
        "ink-soft": "#2A2A2D",
        paper: "#EDE7DD",
        rust: "#C9622A",
        "rust-bright": "#E0793B",
        "rust-dim": "#8F4A22",
        steel: "#5C6670",
        chrome: "#B8BCC2",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
