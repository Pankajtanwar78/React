
import { useState } from 'react';
import TravelListHeader from './TravelListHeader';
import TravelListBody from './TravelListBody';
import TravelListFooter from './TravelListFooter';
import { StyledContainer } from './styles/TravelList.styles';

const TravelList = () => {

  const [travelList, setTravelList] = useState([])

  const handleClearList = () => {
    setTravelList([])
  }

  const handleAddTravelItem = (item) => {
    setTravelList((items) => [...items, item])
  }

  function handleDeleteItem(id){
    setTravelList( (list) => list.filter((item) => item.id !== id))
  }

  function handleToggleItem(id){
    setTravelList( (list) => list.map((item) => {
      if(item.id === id){
        
        return {...item, packed: !item.packed}
      }
      return item
     }))
  }


  return (
    <StyledContainer>
      <TravelListHeader />
      <TravelListBody 
        onAddTravelItem={handleAddTravelItem}
        travelList={travelList}
        onDelete={handleDeleteItem}
        onToggle={handleToggleItem}
        onClearList={handleClearList}
      />
      <TravelListFooter travelList={travelList}/>
    </StyledContainer>
  );
}

export default TravelList;
