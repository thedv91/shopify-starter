/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './shopify/layout/**/*.liquid',
    './shopify/sections/**/*.liquid',
    './shopify/snippets/**/*.liquid',
    './shopify/templates/**/*.liquid',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
};
