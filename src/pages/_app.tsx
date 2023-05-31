import { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import theme from "../global/theme"
import NavBar from "../components/NavBar"
import { GlobalStyle } from "../global/global"

export default function App({ Component, pageProps }:AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <NavBar/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
