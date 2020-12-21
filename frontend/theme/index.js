import breakpoints from "./breakpoints";
import colors from "./colors";

const font = {
  main: "Montserrat,san-serif",
  secondary: "'Source Sans Pro',san-serif",
};

const theme = {
  font,
  colors,
  screenSize: breakpoints.bp,
  sizes: {
    navbarHeight: 68,
  },
};

export default theme;
