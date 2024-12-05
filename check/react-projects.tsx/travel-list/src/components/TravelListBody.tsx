import { useState } from 'react';
import { StyledBody } from './styles/TravelList.styles';
import TravelListBodyHeader from './TravelListBodyHeader';
import TravelListBodyCenter from './TravelListBodyCenter';
import TravelListBodyFooter from './TravelListBodyFooter';

type TravelItem = {
  itemDescription: string;
  quantity: number;
  packed: boolean;
  id: number;
}

type TravelListBodyProps = {
  travelList: TravelItem[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onClearList: () => void;
  onAddTravelItem: (item: TravelItem) => void;
}


const TravelListBody = ({
  onAddTravelItem,
        travelList,
        onDelete,
        onToggle,
        onClearList
}: TravelListBodyProps) => {

  const [sortBy, setSortBy] = useState<string>('input')

  let sortedTravelList = travelList
  if (sortBy === "input")
    sortedTravelList = travelList
  
  if (sortBy === "description")
    sortedTravelList = travelList
      .slice()
      .sort((a, b) => a.itemDescription.localeCompare(b.itemDescription));

  if (sortBy === "packed")
    sortedTravelList = travelList
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  console.log(sortedTravelList)

  const handleSortBy = (sortValue: string) => {
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
