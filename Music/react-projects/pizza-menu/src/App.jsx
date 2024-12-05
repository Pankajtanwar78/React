import React from 'react';
import PizzaMenu from './pizza-menu/PizzaMenu';
import GlobalStyles from './pizza-menu/GlobalStyles';
import './App.css'


const App = () => {
  const maxWidth = window.innerHeight;
console.log('Max width in pixels:', maxWidth);
  return (
    <div>
      <GlobalStyles />
        <PizzaMenu />
    </div>
  );
}

export default App; 
