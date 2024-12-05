import React from 'react';
import { Icon1, Icon2, Icon3, MenuBarContainer } from './styles/MenuBar.styles';

const MenuBar = () => {

  const handleMenuBar = () => {
    
  }

  return (
    <>
    <h2>My Menu Bar</h2>
    <MenuBarContainer onClick={handleMenuBar}>
      <Icon1></Icon1>
      <Icon2></Icon2>
      <Icon3></Icon3>
    </MenuBarContainer>
    </>
  );
}

export default MenuBar;
