/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

    },
    fontFamily: {
      "Overpass": ["Overpass"],
    },
    colors: {
      "Orange": "hsl(25, 97%, 53%)",
      "White": "hsl(0, 0%, 100%)",
      "LightGrey": "hsl(217, 12%, 63%)",
      "MediumGrey": "hsl(216, 12%, 54%)",
      "DarkBlue": "#1f2630",
      "VeryDarkBlue": "hsl(216, 12%, 8%)",
      "ButtonBlue" : "#272e38",
    }, fontSize: {
      "base": '15px',
      "xl":"25px",
      "xs" : "12px",
    },
  },
  plugins: [

  ],
}
