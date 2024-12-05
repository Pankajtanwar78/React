
import { QuizProvider } from './contexts/QuizContext';
import QuizApp from './components/QuizApp';
import GlobalStyles from './styles/Global.styles';
import { ThemeProvider } from 'styled-components';


const theme = {
  colorDarkest: '#343a40',
  colorDark: '#495057',
  colorMedium: '#ced4da',
  colorLight: '#f1f3f5',
  colorTheme: '#1098ad',
  colorAccent: '#ffa94d',
};

const App = () => {
  return (
    <QuizProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <QuizApp />
      </ThemeProvider>
    </QuizProvider>
  );
}

export default App;
