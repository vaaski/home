import { defineConfig } from "vite-plugin-windicss"
import defaultTheme from "windicss/defaultTheme"

const { sans, mono } = defaultTheme.fontFamily

export default defineConfig({
  darkMode: "class",
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      DEFAULT: ["ManropeVariable"],
      sans: ["ManropeVariable", ...sans],
      mono: ['"Roboto Mono"', ...mono],
    },
    extend: {
      colors: {
        background: "var(--background)",
        text: "var(--text)",
        "accent-1": "var(--accent-1)",
        "accent-2": "var(--accent-2)",
        "accent-3": "var(--accent-3)",
      },
    },
  },
})
