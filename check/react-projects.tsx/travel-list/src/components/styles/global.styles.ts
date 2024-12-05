import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 2.4rem;
    font-family: sans-serif;
    color: #5a3e2b;
    font-family: "Quicksand";
    font-weight: 500;
    margin: 0;
  }

`

export default GlobalStyles