import React from 'react';
import { StyledMenu, List } from './PizzaMenu.styles';
import { pizzaDetails } from './pizza-details';

const Menu = () => {
  return (
    <StyledMenu>
      <h2>Our Menu</h2>
      <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
      <ul>
        {pizzaDetails.map((pizza, index) => 
        <List key={index}>
          <img src={pizza.photoName} alt={pizza.name}/>
          <div>
            <h3>{pizza.name}</h3>
            <p>{pizza.ingredients}</p>
            <span>{pizza.price}</span>
          </div>


        </List>
        )}
      </ul>
    </StyledMenu>
  );
}

export default Menu;
