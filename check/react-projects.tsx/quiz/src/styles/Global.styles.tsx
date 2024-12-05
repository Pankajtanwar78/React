import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
                  Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    
    color: ${({theme}) => theme.colorLight};
    background-color: ${({theme}) => theme.colorDarkest};
    margin-top: 6rem;
    min-height: 100vh;
    font-size: 2rem;
  }
`

export default GlobalStyles;

