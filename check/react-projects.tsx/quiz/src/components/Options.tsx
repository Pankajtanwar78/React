import { StyledOptions, StyledOptionButton } from "../styles/Quiz.styles"
import { useQuiz } from "../contexts/QuizContext"

interface QuestionProps {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

interface OptionsProps {
  question: QuestionProps;
}


export default function Options({question}: OptionsProps) {

  const {dispatch, answer} = useQuiz();

  const hasAnswered = answer !== null;
  
  return (
    <StyledOptions>
      {
        question.options.map((val, index) => (
          <StyledOptionButton 
            bgcolor={hasAnswered ? question.correctOption === index ? "correct" : "wrong" : ""}
            trans={hasAnswered && answer === index}
            hasAnswered={hasAnswered}
            key={val}
            onClick={() => {dispatch({type: "answered", payload: index})}}
            disabled={hasAnswered}
            >
              {val}
          </StyledOptionButton>
        ) )
      }


    </StyledOptions>
  )
}
