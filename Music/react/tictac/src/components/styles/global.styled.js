import { createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 5px;
    background-color: ${props => props.theme.colors.body};
  }


`

export default GlobalStyles