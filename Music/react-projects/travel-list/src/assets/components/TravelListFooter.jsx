import React from 'react';
import {StyledFooter}  from './styles/TravelList.styles';

const TravelListFooter = ({travelList}) => {

  const itemReady = travelList.filter(item => item.packed).length
  const totalItems = travelList.length

  const percentage = Math.round((itemReady*100)/totalItems)


  return (
    <StyledFooter>
      {percentage === 100 ? 'You got everything! Ready to go ✈️' : 
        percentage === 0 ? 'Start adding some items to your packing list 🚀' :
        `💼 You have ${totalItems} items on your list, and you already packed ${itemReady} (${percentage}%)`}
    </StyledFooter>
  );
}

export default TravelListFooter;
