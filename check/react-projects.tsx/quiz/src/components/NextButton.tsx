import { StyledNextButton } from "../styles/Quiz.styles";
import { useQuiz } from "../contexts/QuizContext";

const NextButton = () => {

  const {dispatch, answer, index} = useQuiz();

  const hasAnswered = answer !== null;
  const lastQuestion = index === 14;
  return (
    <>
    { hasAnswered && 
    <StyledNextButton onClick={() => {
      dispatch({ type: lastQuestion ? 'finished' : 'nextQuestion' });}}>
      {hasAnswered && lastQuestion ? 'Finish' :'Next'}
    </StyledNextButton> }
    </>
  );
}

export default NextButton;
