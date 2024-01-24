import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#475BE8",
        secondary: "#DADEFA",
        divider: "#E4E4E4",
        black: "#1A1D1F",
        "gray-1": "#E4E8EF",
        "secondary-2": "#CFC8FF",
        "text-primary": "#11142D",
        "text-second": "#808191",
        "bg-color": "#F4F4F4",
        "bg-color-dark": "#111315",
        "text-color-dark": "#EFEFEF",
        "2nd-color-dark": "#6F767E",
        "divider-color-dark": "#272B30",
        "approve-btn": "#2ED480",
        "reject-btn": "#EB5757",
      },
    },
  },
  plugins: [],
}
export default config
