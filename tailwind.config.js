/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   "./src/pages/**/*.{js,ts,jsx,tsx}",
  //   "./src/components/**/*.{js,ts,jsx,tsx}",
  // ],
  prefix: "tw-",
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,css,scss,sass}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '1xl': '1.35rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
      '10xl': '9rem',
    },
    extend: {
      fontFamily: {
        Trap: ["Trap", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Spline_Mono: ["Spline Sans Mono", "monospace"],
      },
    },
  },
};
