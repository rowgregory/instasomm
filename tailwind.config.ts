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
        "brown-1": "#1c1c1c",
      },
      fontFamily: {
        LCD: ['"Libre Caslon Display"', "serif"],
      },
      backgroundImage: {
        "g-lime":
          "linear-gradient(340deg,rgb(64, 175, 73)  18%, rgb(189, 234, 51) 100%)",
        "g-lime-circle":
          "linear-gradient(263deg, rgb(63, 175, 74) 18%,  rgb(89, 188, 61) 100%)",
        "g-lime-triangle":
          "linear-gradient(247deg, rgb(63, 175, 74) 18%,  rgb(89, 188, 61) 100%)",
        "g-sky":
          "linear-gradient(340deg,rgb(21, 105, 198)  18%, rgb(16, 203, 228) 100%)",
        "g-sky-circle":
          "linear-gradient(249deg,rgb(19, 106, 198) 18%,  rgb(21, 126, 204) 100%)",
        "g-sky-triangle":
          "linear-gradient(247deg,rgb(19, 106, 198) 18%,  rgb(21, 126, 204) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
