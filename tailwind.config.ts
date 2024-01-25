import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGray: "#6c7983",
        lightGray: "#b2becd",

        dark: {
          bg: "#181818",
          bg2: "#212121",
          text: "#fff",
          activeNavLink: "rgba(249,249,249, 0.08)",
          activeNavLinkHover: "rgba(249,249,249, 0.03)",
          borderColor: "rgba(249,249,249, 0.08)",
        },
        light: {
          bg: "#EDEDED",
          bg2: "#F9F9F9",
          text: "#181818",
          activeNavLink: "rgba(230,230,230, .87)",
          activeNavLinkHover: "#C5C5C5",
          borderColor: "#C5C5C5",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
