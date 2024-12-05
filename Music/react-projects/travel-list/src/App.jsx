import React from 'react';
import TravelList from './assets/components/TravelList';
import './App.css'
import GlobalStyles from './assets/components/styles/global.styles';

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <TravelList />
    </div>
  );
}

export default App;
