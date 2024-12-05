import { StyledStartScreen } from "../styles/Quiz.styles";
import { useQuiz } from "../contexts/QuizContext";
const StartScreen = () => {

  const {dispatch} = useQuiz();
  return (
    <StyledStartScreen>
      <h2>Welcome to The React Quiz!</h2>
      <h3>15 questions to test your React mastery</h3>
      <button onClick={()=> {dispatch({type: "start"})}}>Let&apos;s start</button>
    </StyledStartScreen>
  );
}

export default StartScreen;
