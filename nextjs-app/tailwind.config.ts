import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      iconColor: "var(--icon-color)",
      warnColor: "var(--warn-color)",
      searchBgColor: "var(--search-bg-color)",
      transparent: "transparent",
      red: "#ff3b30",
      green: "#4cd964",
      blue: "var(--icon-color)",
      pink: "#ff2d55",
      yellow: "#ffcc00",
      orange: "#ff9500",
      gray: "#8e8e93",
      brown: "#D2691E",
      darkgreen: "#228B22",
      deeppink: "#FFC0CB",
      cadetblue: "#5f9ea0",
      darkorchid: "#9932cc",
    },
    margin: {
      navHeight: "var(--nav-height)",
      navHeightLg: "var(--nav-height-lg)",
    },
    height: {
      navHeight: "var(--nav-height)",
      navHeightLg: "var(--nav-height-lg)",
      footerHeight: "var(--footer-height)",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      backgroundImage: {
        "linear-gradient":
          "linear-gradient(180deg,rgba(0,0,0,.01) 60%,rgba(0,0,0,.9) 100%)",
        "linear-gradient-blue":
          "linear-gradient(135deg,var(--theme-color),var(--theme-color-shade))!important;",
      },
      boxShadow: {
        full: "0 1rem 3rem rgba(0,0,0,.175)",
      },
      animation: {
        dropdown: "SearchShowDropdown 0.3s ease-in-out",
        sidebarShow: "sidebarShow 0.6s ease",
        sidebarHidden: "sidebarHidden 0.6s ease",
        navbarShow: "navbarShow 0.6s ease",
        navbarHidden: "navbarHidden 0.6s ease",
      },
      keyframes: () => ({
        SearchShowDropdown: {
          "0%": { top: "-63px" },
          "100%": { top: "0px" },
        },
        sidebarShow: {
          "0%": { right: "-280px" },
          "100%": { right: "0px" },
        },
        sidebarHidden: {
          "0%": { right: "0" },
          "100%": { right: "-280px" },
        },
        navbarShow: {
          "0%": { left: "-280px" },
          "100%": { left: "0px" },
        },
        navbarHidden: {
          "0%": { left: "0" },
          "100%": { left: "-280px" },
        },
      }),
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      fredokaOneRegular: ["Fredoka", "cursive"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
