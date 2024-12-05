import { useState } from 'react';
import { StyledBodyHeader } from './styles/TravelList.styles';

const TravelListBodyHeader = ({onAddTravelItem}) => {

  const [quantity, setQuantity] = useState(1)
  const [itemDescription, setItemDescription] = useState('')

  function handleAddItem() {
    console.log('Right')

    if(!itemDescription ) return

    const newItem = { itemDescription, quantity, packed: false, id: Date.now() };
    onAddTravelItem(newItem)
    setQuantity(1)
    setItemDescription('')
  }

  return (
    <StyledBodyHeader>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value)}}
      >
        {Array.from({ length: 20 }, (_, i) => i+1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input 
        type='text' 
        placeholder='Item...' 
        value={itemDescription}
        onChange={(e) => {
          setItemDescription(e.target.value)}}
      />
      <button
        onClick={handleAddItem}
      >Add</button>
    </StyledBodyHeader>
  );
}

export default TravelListBodyHeader;
