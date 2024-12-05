import Header from './Header';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Progress from './Progress';
import Question from './Question';
import Footer from './Footer';
import Timer from './Timer';
import NextButton from './NextButton';
import FinishScreen from './FinishScreen';
import Main from './Main';
import { StyledQuizApp } from '../styles/Quiz.styles';
import { useQuiz } from '../contexts/QuizContext';

const QuizApp = () => {
  const { status } = useQuiz();


  return (
    <StyledQuizApp>
      <Header />
      {status === 'loading' && <Loader />}
      {status === 'error' && <Error /> }
      {status === 'ready' && <StartScreen />}
      {status === 'active' && 
        <Main>
          <Progress />
          <Question />
          <Footer>
            <Timer />
            <NextButton />
          </Footer>
        </Main>
      }
      {status === 'finish' && <FinishScreen /> }
    </StyledQuizApp>
  );
}

export default QuizApp;
