import { createGlobalStyle } from "styled-components";
import { breakpoints, mediaQueries } from "./breakpoints";
import colors from "./colors";

const font = {
  main: "Montserrat,san-serif",
  secondary: "'Source Sans Pro',san-serif",
};

const theme = {
  font,
  colors,
  breakpoints,
  mediaQueries,
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${font.main};
  }
  color: ${colors.black[800]}
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${font.main};
  }
`;

export default theme;
