import './App.css'
//import {ThemeProvider} from 'styled-components'
//import StyledButton, {FancyButton, MyButton, Animation, ThemeProvider, DarkThemeButton, GlobalStyle} from './components/Button/Button'
import LandingPage from './components/LandingPage'

// const theme = {
//   dark: {
//     primary: '#fff',
//     text: '#000'
//   },
//   light: {
//     primary: '#000',
//     text: '#fff'
//   },
//   font: 'Arial'
// }


function App(){
  return (
    <LandingPage/>
    // <ThemeProvider theme={theme}>
    //   <GlobalStyle/>
    //   <button>Button</button>
    //   <div><br></br></div>
    //   <StyledButton>Styled button</StyledButton>
    //   <div><br></br></div>
    //   <StyledButton variant='outline'>Outline Styled button</StyledButton>
    //   <div><br></br></div>
    //   <FancyButton>I am fancy yoo</FancyButton>
    //   <div><br></br></div>
    //   <MyButton value={false}>My button</MyButton>
    //   <div><br></br></div>
    //   <Animation>LOVE
    //     <StyledButton>
    //       Geek
    //     </StyledButton>


    //   </Animation>
    //   <div><br></br></div>
    //   <DarkThemeButton>DarkThemeButton</DarkThemeButton>
    // </ThemeProvider>
  )
}

export default App




// import {useState, useEffect} from 'react'
// import './App.css'



// function Square({value, onSquareClick}) {


//   return <button 
//       className="square"
//       onClick={onSquareClick}
//     >
//       {value}
//     </button>
// }

// function Board({XIsNext, currentSquares, onGame}){

//   function handleClick(i){
//     if(currentSquares[i] || calculateWinner(currentSquares)){
//       return
//     }

//     const nextSquares = currentSquares.slice()
//     if ( XIsNext ){
//       nextSquares[i] = "X"
//     }
//     else{
//       nextSquares[i] = "O"
//     }
    
//     onGame(nextSquares)
//   }


//   function getStatus(){
//     const winner = calculateWinner(currentSquares)
//     let status;
//     if (winner){
//       status = 'Winner' + winner
//     }
//     else{
//       status = 'Next player: ' + (XIsNext ? 'X' : 'O');
//     }
//     return status
//   }

//   return (
//     <>
//       <div>{getStatus()}</div>
//       <div className="board-row">
//         <Square value={currentSquares[0]} onSquareClick={() => handleClick(0)}/>
//         <Square value={currentSquares[1]} onSquareClick={() => handleClick(1)}/>
//         <Square value={currentSquares[2]} onSquareClick={() => handleClick(2)}/>
//       </div>
//       <div className="board-row">
//         <Square value={currentSquares[3]} onSquareClick={() => handleClick(3)}/>
//         <Square value={currentSquares[4]} onSquareClick={() => handleClick(4)}/>
//         <Square value={currentSquares[5]} onSquareClick={() => handleClick(5)}/>
//       </div>
//       <div className="board-row">
//         <Square value={currentSquares[6]} onSquareClick={() => handleClick(6)}/>
//         <Square value={currentSquares[7]} onSquareClick={() => handleClick(7)}/>
//         <Square value={currentSquares[8]} onSquareClick={() => handleClick(8)}/>
//       </div>
//     </>
//   )
// }

// export default function Game(){
//   const [XIsNext, setXIsNext] = useState(true)
//   const [history, setHistory] = useState([Array(9).fill(null)])
//   const [currentMove, setCurrentMove] = useState(0);
//   const currentSquares = history[currentMove]

//   function handleHistory(nextSquares){

//     const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
//     setHistory(nextHistory);
//     setCurrentMove(nextHistory.length - 1);
//     setXIsNext(!XIsNext);
//   }

//   function jumpTo(nextMove){
//     setCurrentMove(nextMove);
//     setXIsNext(nextMove % 2 === 0);
//   }

//   const moves = history.map((square, move) => {
//     let description
//     if( move > 0 ){
//       description = 'Go to move #' + move
//     }
//     else{
//       description = 'Lets start the game'
//     }

//     return (
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}>{description}</button>
//       </li>
//     )
//   })

//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board XIsNext={XIsNext} currentSquares={currentSquares} onGame={handleHistory}/>
//       </div>
//       <div>
//         <ol>{moves}</ol>
//       </div>
//     </div>
//   )
// }

// function calculateWinner(squares){
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ]

//   for ( let i=0; i < lines.length; i++ ){
//     const [a,b,c] = lines[i]
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null
// }

// // Create a Title component that'll render an <h1> tag with some styles
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: #BF4F74;
// `;

// // Create a Wrapper component that'll render a <section> tag with some styles
// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;

// // Use Title and Wrapper like any other React component – except they're styled!
// render(
//   <Wrapper>
//     <Title>
//       Hello World!
//     </Title>
//   </Wrapper>
// );


// import React from 'react';

// import styled from 'styled-components';

// // Create a <Title> react component that renders an <h1> which is
// // centered, palevioletred and sized at 1.5em
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

// // Create a <Wrapper> react component that renders a <section> with
// // some padding and a papayawhip background
// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;

// export default function MyUI() {
//   return (
//     // Use them like any other React component – except they're styled!
//     <Wrapper>
//       <Title>Hello World, this is my first styled component!</Title>
//     </Wrapper>
//   );
// }