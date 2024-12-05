import { useState } from 'react';
import { StyledBody } from './styles/TravelList.styles';
import TravelListBodyHeader from './TravelListBodyHeader';
import TravelListBodyCenter from './TravelListBodyCenter';
import TravelListBodyFooter from './TravelListBodyFooter';

const TravelListBody = ({
  onAddTravelItem,
        travelList,
        onDelete,
        onToggle,
        onClearList
}) => {

  const [sortBy, setSortBy] = useState('input')

  let sortedTravelList = sortBy === 'input' && travelList

  if (sortBy === "description")
    sortedTravelList = travelList
      .slice()
      .sort((a, b) => a.itemDescription.localeCompare(b.itemDescription));

  if (sortBy === "packed")
    sortedTravelList = travelList
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));



  const handleSortBy = (sortValue) => {
    setSortBy(sortValue)
  }

  return (
    <StyledBody>
      <TravelListBodyHeader onAddTravelItem={onAddTravelItem} />
      <TravelListBodyCenter travelList={sortedTravelList} onDelete={onDelete} onToggle={onToggle}/>
      <TravelListBodyFooter onClearList={onClearList} onSortBy={handleSortBy}/>
    </StyledBody>
  );
}

export default TravelListBody;
