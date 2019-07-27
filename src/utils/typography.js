import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Montserrat",
    "-apple-system",
    "BlinkMacSystemFont",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Merriweather", "serif"],
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["700"],
    },
    {
      name: "Merriweather",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
});

export default typography;
