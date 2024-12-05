import React from 'react';
import { StyledBodyCenter, List } from './styles/TravelList.styles';

const TravelListBodyCenter = ({travelList, onToggle, onDelete}) => {


  return (
    <StyledBodyCenter totalItems={travelList.length}>
      <ul>
        {travelList.map((item,index) => (
          <List key={item.id} packingStatus={item.packed}>
            <input type='checkbox' 
              value={item.packed}
              onChange={() => {onToggle(item.id)}}
              />  
            <span>{item.quantity} {item.itemDescription}</span>
            <button onClick={() => {onDelete(item.id)}}>❌</button>
          </List>
        ))}
      </ul>
    </StyledBodyCenter>
  );
}

export default TravelListBodyCenter;
