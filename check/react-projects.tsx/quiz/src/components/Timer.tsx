import { StyledTimer } from "../styles/Quiz.styles";
import { useQuiz } from "../contexts/QuizContext";
import { useEffect } from "react";
const Timer = () => {
  const {dispatch, secondsRemaining} = useQuiz();

  const mins = Math.floor((secondsRemaining ?? 0) / 60);
  const secs = (secondsRemaining ?? 0) % 60;

  if (secondsRemaining === 0){
    dispatch({type: 'finished'});
  }


  useEffect(() => {
    const id = setInterval(()=>{
      dispatch({type: "tick"});
    }, 1000);

    return () => {clearInterval(id)};
  },[dispatch]);
  return (
    <StyledTimer>
      {mins < 0 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </StyledTimer>
  );
}

export default Timer;
