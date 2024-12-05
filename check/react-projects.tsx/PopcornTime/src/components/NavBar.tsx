import { useRef } from 'react';
import { StyledHeader } from './styles/PopcornTime.styles';
import useKey from './useKey';

type NavBarProps = {
  query: string;
  onQuery: (val: string) => void;
  moviesLength: number;
}

const NavBar = ({query, onQuery, moviesLength}: NavBarProps) => {

  const inputEl = useRef<HTMLInputElement>(null);

  useKey({key: 'enter', action: function(){
    if (document.activeElement === inputEl.current) return;
    inputEl.current?.focus();
    onQuery("");
  }})


  return (
      <StyledHeader>
        <div>
          <span>🍿</span>
          <h2>usePopcorn</h2>
        </div>
        
        <input 
          type='text'
          placeholder='Search movies...'
          value={query}
          onChange={(e) => {onQuery(e.target.value)}}
          ref={inputEl}
          />
        <p>Found {moviesLength} results</p>
      </StyledHeader>
  );
}

export default NavBar;
