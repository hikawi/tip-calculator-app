/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: "hsl(172, 67%, 45%)",
          red: "hsl(13, 70%, 60%)",
        },
        neutral: {
          "dark-cyan": "hsl(183, 100%, 15%)",
          "dark-gray-cyan": "hsl(186, 14%, 43%)",
          "gray-cyan": "hsl(184, 14%, 56%)",
          "light-gray-cyan": "hsl(185, 41%, 84%)",
          "bright-cyan": "hsla(172, 61%, 77%, 1)",
          "lighter-gray-cyan": "hsl(189, 41%, 97%)",
        },
      },
      fontFamily: {
        "space-mono": ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
