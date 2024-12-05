import { useState } from 'react';
import { StyledBodyHeader } from './styles/TravelList.styles';

type TravelItem = {
  itemDescription: string;
  quantity: number;
  packed: boolean;
  id: number;
}

type TravelItemProps = {
  onAddTravelItem: (item: TravelItem) => void;
}

const TravelListBodyHeader = ({onAddTravelItem}: TravelItemProps) => {

  const [quantity, setQuantity] = useState<number>(1)
  const [itemDescription, setItemDescription] = useState<string>('')

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
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setQuantity(Number(e.target.value))}}
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
