import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../global/theme";
import { GlobalStyle } from "../global/global";
import NavBar from "../components/NavBar";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <NavBar />
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
