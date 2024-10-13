const withMT = require("@material-tailwind/react/utils/withMT");
 
 module.exports = withMT({
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
     extend: {      colors: {
      customGray: '#D4D4D4'}},
   },
   plugins: [],
 });