import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "../theme";
import { ToastContainer } from "react-toast";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer position="bottom-right" delay={3000} />
    </ThemeProvider>
  );
}

export default MyApp;
