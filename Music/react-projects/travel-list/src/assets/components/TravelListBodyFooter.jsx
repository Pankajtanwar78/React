import { useState } from 'react';

import { StyledBodyFooter } from './styles/TravelList.styles';

const TravelListBodyFooter = ({onClearList, onSortBy}) => {

  const [sortInfo, setSortInfo] = useState('input')

  function handleSortInfo(e){
    setSortInfo(e.target.value)
    onSortBy(e.target.value)
  }

  return (
    <StyledBodyFooter>
      <select
        value={sortInfo}
        onChange={(e) => {handleSortInfo(e)}}
      >
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
      </select>
      <button
        onClick={() => onClearList()}
      >Clear list</button>
    </StyledBodyFooter>
  );
}

export default TravelListBodyFooter;
