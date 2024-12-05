import { StyledQuestion } from "../styles/Quiz.styles";
import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

const Question = () => {
  const {questions, index} = useQuiz();
  const question = questions[index];

  return (
    <StyledQuestion>
      <h4>{question.question}</h4>
      <Options question={question} key={index}></Options>
    </StyledQuestion>
  );
}

export default Question;
