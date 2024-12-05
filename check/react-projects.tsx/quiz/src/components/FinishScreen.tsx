import {StyledFinishScreen,
        StyledFinalScore,
        StyledRestartQuiz } from '../styles/Quiz.styles';
import { useQuiz } from '../contexts/QuizContext';
const FinishScreen = () => {

  const {dispatch, points, highscore} = useQuiz();
  const percentage = Math.floor((points/280)*100);
  return (
    <StyledFinishScreen>
      <StyledFinalScore>
        🎉 You scored {points} out of 280 ({percentage}%)
      </StyledFinalScore>
      <div>
        (Highscore: {highscore} points)
      </div>
      <StyledRestartQuiz onClick={() => {dispatch({type: "retry"})}}>
        Restart quiz
      </StyledRestartQuiz>
    </StyledFinishScreen>
  );
}

export default FinishScreen;
