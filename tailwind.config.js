/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        scissors: {
          light: "hsl(39, 89%, 49%)",
          DEFAULT: "hsl(40, 84%, 53%)",
        },
        paper: {
          light: "hsl(230, 89%, 62%)",
          DEFAULT: "hsl(230, 89%, 65%)",
        },
        rock: {
          light: "hsl(349, 71%, 52%)",
          DEFAULT: "hsl(349, 70%, 56%)",
        },
        lizard: {
          light: "hsl(261, 73%, 60%)",
          DEFAULT: "hsl(261, 72%, 63%)",
        },
        cyan: {
          light: "hsl(189, 59%, 53%)",
          DEFAULT: "hsl(189, 58%, 57%)",
        },
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
        "scissors-gradient":
          "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
        "paper-gradient":
          "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
        "rock-gradient":
          "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
        "lizard-gradient":
          "linear-gradient(hsl(261, 73%, 60%), hsl(261, 72%, 63%))",
        "spock-gradient":
          "linear-gradient(hsl(189, 59%, 53%), hsl(189, 58%, 57%))",
        triangle: "url('../../public/images/bg-triangle.svg')",
        pentagon: "url('../../public/images/bg-pentagon.svg')",
      },
      boxShadow: {
        "rings-1":
          "0 0 0 20px var(--ring-1-clr), 0 0 0 45px var(--ring-2-clr), 0 0 0 80px var(--ring-3-clr)",
        "rings-2":
          "0 0 0 65px var(--ring-1-clr), 0 0 0 150px var(--ring-2-clr), 0 0 0 240px var(--ring-3-clr)",
        inside: "inset var(--shadow-size) var(--shadow-inside-clr)",
        "rock-outside": "var(--shadow-size) var(--rock-shadow-clr)",
        "paper-outside": "var(--shadow-size) var(--paper-shadow-clr)",
        "scissors-outside": "var(--shadow-size) var(--scissors-shadow-clr)",
        "spock-outside": "var(--shadow-size) var(--spock-shadow-clr)",
        "lizard-outside": "var(--shadow-size) var(--lizard-shadow-clr)",
        "hide-outside": "var(--shadow-size) var(--hide-outside-clr)",
      },
    },
  },
  plugins: [],
};
