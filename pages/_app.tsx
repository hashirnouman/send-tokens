import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../my-theme";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={myTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
