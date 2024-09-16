// @ts-check
const { theme } = require('shared/tailwind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', '../shared/**/*.{js,jsx,ts,tsx}'],
  /* 
  the index.d.ts file for nativew is empty. causing typescript to throw an error.
  the index.js file contains content, so it doesn't cause an issue during build time
  we can safely ignore the typescript error below
  **/
  // @ts-ignore
  presets: [require('nativewind/preset')],
  theme: {
    ...theme,
  },
  plugins: [],
};
