import type { Config } from "tailwindcss";

const config: Config = {
  prefix: "tw-",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors:{
        primary: "#1b8741",
        secondary: "#664218",
      }
    },
  },
  plugins: [require("daisyui")],

 
    daisyui: {
      themes: false, 
      darkTheme: "light", 
    },
};
export default config;
