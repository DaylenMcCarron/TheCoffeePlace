/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          1: '#EDE0D4',
          2: '#E6CCB2',
          3: '#DDB892',
          4: '#B08968',
          5: '#7F5539',
          6: '#9C6644',
        },
      }
    }
  },
  plugins: [],
}