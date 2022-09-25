/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@mantine/carousel"),
    require("@mantine/core"),
    require("@mantine/hooks"),
    require("@emotion/react"),
    require("@emotion/server"),
    require("@mantine/remix"),
  ],
};
