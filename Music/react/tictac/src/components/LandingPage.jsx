import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/global.styled"
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}




export default function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <Header/>
        <Body/>
        <Footer/>
    </ThemeProvider>
    
  )
}