import styled, { keyframes, ThemeProvider, createGlobalStyle } from 'styled-components'

export {ThemeProvider}

export const StyledButton = styled.button`
  background-color: ${({variant}) => {
      if(variant === 'outline'){
        return '#FFF';
      }
      return '#4caf50';
    }};
  color: ${({variant}) => {
      if(variant === 'outline'){
        return '#4caf50';
      }
      return '#000';
    }};
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  border: 1px solid #4caf50;
  transition: 0.5s all ease-out;
  display: inline-block;
  margin-top: 10px;
  &:hover {
    background-color: ${({variant}) => {
      if(variant !== 'outline'){
        return '#FFF';
      }
      return '#4caf50';
    }};
  color: ${({variant}) => {
      if(variant !== 'outline'){
        return '#4caf50';
      }
      return '#FFF';
    }};
  }
`


export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`

export const MyButton = styled(StyledButton).attrs(props => {
  if (props.value === true){
    return {
      type: "title",
      sizee: 'XL'
    }
  }
  else{
    return {
      type: "titleeeee"
    }
  }
  
})`
  background-color: yellow
`

const Rotate = keyframes`
  from {
    left: 0px;
    transform: rotate(0deg);
  }
  to {
    left: 500px;
    transform: rotate(360deg);
  }
`
export const Animation = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  position: relative;
  animation: ${Rotate} infinite 5s linear;

  ${StyledButton} {
    background-color: purple;
  }
`

export const DarkThemeButton = styled(StyledButton)`
  background-color: ${props => props.theme.dark.primary};
  color: ${props => props.theme.dark.text};
`

export const GlobalStyle = createGlobalStyle`
button {
  font-family: ${props => props.theme.font};
}
  
`