import { StyledHeader } from "../styles/Quiz.styles";
import viteLogo from '/vite.svg'

const Header = () => {
  return (
    <StyledHeader>
      <img src={viteLogo} alt='React logo' />
      <h1>The React Quiz</h1>
    </StyledHeader>
  );
}

export default Header;
