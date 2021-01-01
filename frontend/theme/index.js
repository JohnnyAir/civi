import { createGlobalStyle } from "styled-components";
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

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.font.main};
  }
  color: ${({ theme }) => theme.colors.black[800]};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.font.main};
  }
  hr {
    height: 1px;
    background-color: ${({ theme }) => theme.colors.black[300]};
    border: none;
  }
`;

export default theme;
