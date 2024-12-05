import { useState } from 'react';

import { StyledBodyFooter } from './styles/TravelList.styles';

type TravelListBodyFooterProps = {
  onClearList: () => void;
  onSortBy: (sortValue: string) => void;

}

const TravelListBodyFooter = ({onClearList, onSortBy}: TravelListBodyFooterProps) => {

  const [sortInfo, setSortInfo] = useState<string>('input')

  function handleSortInfo(e: React.ChangeEvent<HTMLSelectElement>){
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
