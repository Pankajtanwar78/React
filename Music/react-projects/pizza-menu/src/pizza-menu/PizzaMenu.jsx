import React from 'react';

import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import { StyledContainer } from './PizzaMenu.styles';

const PizzaMenu = () => {
  return (
    <StyledContainer >
      <Header />
      <Menu />
      <Footer />
    </StyledContainer>
  );
}

export default PizzaMenu;
