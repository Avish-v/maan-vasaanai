/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
    extend: {
    colors: {
        brand: {
        green: "#0B2D1E",
        cream: "#F9F6EE",
        terracotta: "#C85A32",
        brown: "#2C1D11",
        gold: "#D4AF37",
        darkGreen: "#061A11",
        }
    },
    fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
    }
    },
},
plugins: [],
}