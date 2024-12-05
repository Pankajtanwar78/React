import styled from 'styled-components'

export const StyledQuizApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 66rem;
  text-transform: uppercase;
  align-items: center;
  

  img{
    width: 14rem;
  }

  h1{
    font-family: "Codystar";
    font-size: 5.6rem;
  }
`                   
  
export const StyledLoader = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  color: ${({theme}) => theme.colorMedium};
  font-size: 2rem;


  div {
    width: 50px;
    height: 24px;
    background: radial-gradient(circle closest-side, currentColor 90%, #0000) 0%
        50%,
      radial-gradient(circle closest-side, currentColor 90%, #0000) 50% 50%,
      radial-gradient(circle closest-side, currentColor 90%, #0000) 100% 50%;
    background-size: calc(100% / 3) 12px;
    background-repeat: no-repeat;
    animation: loader 1s infinite linear;
  }

  @keyframes loader {
    20% {
      background-position: 0% 0%, 50% 50%, 100% 50%;
    }
    40% {
      background-position: 0% 100%, 50% 0%, 100% 50%;
    }
    60% {
      background-position: 0% 50%, 50% 100%, 100% 0%;
    }
    80% {
      background-position: 0% 50%, 50% 50%, 100% 100%;
    }
  } 
`

export const StyledError = styled.div`
  margin-top: 4rem;
  text-align: center;

  padding: 2rem;
  background-color: #495057;
  border-radius: 100px;
  span{
    margin-right: 2rem;
  }
`

export const StyledStartScreen = styled.div`
  text-align: center;
  margin-top: 4rem;
  h2{
    font-size: 3.6rem;
  }
  h3{
    font-size: 2.4rem;
    font-weight: 600;
    margin-top: 2rem;
  }
  button{
    padding: 1.5rem 2.5rem;
    margin-top: 4rem;
    border: 1px solid ${({theme}) => theme.colorDark};
    border-radius: 3rem;
    font-size: 2rem;
    color: ${({theme}) => theme.colorMedium};
    background-color: ${({theme}) => theme.colorDark};
    transition: all 0.3s ease;
  }

  button:hover{
    background-color: transparent;
  }
`

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: .4rem;
  justify-content: start;
  margin-top: 4rem;
  width: 50rem;
  text-align: center;

`

export const StyledQuestion = styled.div`
  margin-top: 4rem;
  h4{
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 2.4rem;
    text-align: start;
  }
  width: 100%;
`

export const StyledOptions = styled.div`
  width: 100%;
`

interface StyledOptionButtonProps {
  bgcolor: string;
  hasAnswered: boolean
  trans: boolean
}

export const StyledOptionButton = styled.button<StyledOptionButtonProps>`
  display: block;
  padding: 1.5rem 3rem;
  color: ${({theme}) => theme.colorLight};
  background-color: ${({theme, bgcolor}) => 
    bgcolor === "correct" ? theme.colorTheme : 
    bgcolor === "wrong" ? theme.colorAccent :
    theme.colorDark};
  border: none;
  border-radius: 3rem;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 2.2rem;
  text-align: start;
  transition: ${({hasAnswered}) => hasAnswered ? "none" : "transform  0.3s ease"};
  cursor: ${({hasAnswered}) => hasAnswered ? "not-allowed" : "pointer"};
  transform: ${({trans}) => trans && "translateX(1.4rem)"};

  &:hover {
    ${({ hasAnswered, theme, bgcolor }) => 
      !hasAnswered && `
        transform: translateX(1.4rem);
        background-color: ${bgcolor === "correct" ? theme.colorTheme :
          bgcolor === "wrong" ? theme.colorAccent :
          "transparent"};
        border: 1px solid ${theme.colorDark};
      `}
  }
`

export const StyledProgress = styled.header`
  margin-top: 4rem;
  width: 100%;
  display: grid;
  justify-content: space-between;
  grid-template-columns: auto auto;
  gap: .7rem;
  color: ${({theme}) => theme.colorMedium};

  progress{
    width: 100%;
    grid-column: 1 / -1;
    height: 12px;
  }
  p{
    margin-left: .5rem;
    margin-right: .5rem;
  }

  /* Fallback for other browsers */
  progress {
    background-color: ${({ theme }) => theme.colorMedium};
    border-radius: 100px;
  }

  /* Styles for WebKit browsers */
  progress::-webkit-progress-bar {
    background-color: ${({ theme }) => theme.colorMedium};
    border-radius: 100px;
  }
  progress::-webkit-progress-value {
    background-color: ${({ theme }) => theme.colorTheme};
    border-radius: 100px;
  }

  /* Styles for Firefox */
  progress::-moz-progress-bar {
    background-color: ${({ theme }) => theme.colorMedium};
    border-radius: 100px;
  }

`

export const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

export const StyledTimer = styled.button`
  font-size: 2.2rem;
  padding: 1.5rem 3rem;
  border-radius: 3rem;
  border: 1px solid ${({theme}) => theme.colorDark};
  background-color: transparent;
  color: ${({theme}) => theme.colorMedium};
`

export const StyledNextButton = styled(StyledTimer)`
  background-color: ${({theme}) => theme.colorDark};
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
  }
`

export const StyledFinishScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;
  width: 50rem;
`
export const StyledFinalScore = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.colorTheme};
  padding: 2rem 2rem;
  border-radius: 5rem;
  margin-top: 4rem;
  margin-bottom: 1rem;
  font-size: 2.2rem;
`

export const StyledRestartQuiz = styled(StyledNextButton)`
  margin-left: auto;
  margin-top: 6rem;
`
