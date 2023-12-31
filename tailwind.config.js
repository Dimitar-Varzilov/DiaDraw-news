/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { primary: "rgb(255, 0, 0)", secondary: "rgb(63, 81, 181)" },
    },
  },
  plugins: [],
});
