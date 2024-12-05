import { StyledProgress } from "../styles/Quiz.styles";
import { useQuiz } from "../contexts/QuizContext";
const Progress = () => {

  const {points, index} = useQuiz();

  return (
    <StyledProgress>
      <progress max={15} value={index + 1} />
      <p>Questions <strong>{index+1}</strong> / 15</p>
      <p><strong>{points}</strong> / 280</p>
    </StyledProgress>
  );
}

export default Progress;
