import { StyledBodyCenter, List } from './styles/TravelList.styles';

type TravelItem = {
  itemDescription: string;
  quantity: number;
  packed: boolean;
  id: number;
}

type TravelListBodyCenterProps = {
  travelList: TravelItem[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TravelListBodyCenter = ({travelList, onToggle, onDelete}: TravelListBodyCenterProps) => {


  return (
    <StyledBodyCenter totalItems={travelList.length}>
      <ul>
        {travelList.map((item) => {
          return (
          <List key={item.id} packingStatus={item.packed}>
            <input type='checkbox' 
              checked={item.packed}
              onChange={() => {
                console.log(item.id)
                onToggle(item.id)}}
              />  
            <span>{item.itemDescription} --  {item.quantity}</span>

            <button onClick={() => {onDelete(item.id)}}>❌</button>
          </List>
        )})}
      </ul>
    </StyledBodyCenter>
  );
}

export default TravelListBodyCenter;
