import { createContext, useContext, useEffect, useReducer } from 'react';


const QuizContext = createContext<QuizContextType | undefined>(undefined);
const SECS_PER_QUESTION = 30;

interface Question {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

interface QuizState {
  questions: Question[];
  status: 'loading' | 'ready' | 'active' | 'finish' | 'error';
  answer: number | null;
  index: number;
  points: number;
  secondsRemaining: number | null;
  err: Error | null;
  highscore: number;
}

// Define actions
type QuizAction =
  | { type: 'dataLoading' }
  | { type: 'dataReceived'; payload: Question[] }
  | { type: 'dataFailed'; payload: Error }
  | { type: 'start' }
  | { type: 'answered'; payload: number }
  | { type: 'nextQuestion' }
  | { type: 'finished' }
  | { type: 'retry' }
  | { type: 'tick' };

// Define the context value shape
interface QuizContextType {
  questions: Question[];
  status: 'loading' | 'ready' | 'active' | 'finish' | 'error';
  answer: number | null;
  index: number;
  points: number;
  secondsRemaining: number | null;
  numQuestions: number;
  maxPossiblePoints: number;
  highscore: number;
  dispatch: React.Dispatch<QuizAction>;
}

const initialState: QuizState = {
  questions: [],
  status: "loading",
  answer: null,
  index: 0,
  points: 0,
  secondsRemaining: null,
  err: null,
  highscore: 0
}

function reducer(state: QuizState, action: QuizAction): QuizState {
  switch(action.type){
    case "dataLoading":
      return {
      ...state,
      status: "loading"
    }
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready"
      }
    case "dataFailed":
      return {
        ...state,
        status: "error",
        err: action.payload
      }
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION
      }
    case "answered":
      return {
        ...state,
        answer: action.payload,
        points: state.points + (state.questions[state.index].correctOption === action.payload ? state.questions[state.index].points: 0)
      }

    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null
      }
    case "finished":
      return {
        ...state,
        status: "finish",
        highscore: state.points > state.highscore ? state.points : state.highscore
      }

    case "retry":
      return {
        ...initialState,
        questions: state.questions,
        highscore: state.highscore,
        status: "ready"
      }

    case "tick":
      return {
        ...state,
        secondsRemaining: (state.secondsRemaining ?? 0) - 1
      }
    default:

      throw new Error("Action unkonwn");
  }
}

interface QuizProviderProps {
  children: React.ReactNode;
}

function QuizProvider({children}: QuizProviderProps) {
  const [state, dispatch] = useReducer<React.Reducer<QuizState, QuizAction>>(reducer, initialState);

  const numQuestions = state.questions.length;
  const maxPossiblePoints = state.questions.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(() => {
    dispatch({ type: 'dataLoading'})
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed", payload: err }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
           ...state,
           numQuestions,
           maxPossiblePoints,

           dispatch
      }}
    >{children}</QuizContext.Provider>
  )
}


function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("QuizContext was used outside of the QuizProvider");
  }
  return context;
}

export {useQuiz, QuizProvider};
