import { StyledMain } from "../styles/Quiz.styles"


export default function Main({children}: {children: React.ReactNode}) {
  return (
    <StyledMain>
      {children}
    </StyledMain>
  )
}
