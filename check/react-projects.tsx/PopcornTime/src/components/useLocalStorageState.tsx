import { useState, useEffect } from "react";

type MovieProps = {
  Title: string;
  imdbID: string; 
  imdbRating: number;
  Runtime: number;
  Poster: string;
  UserRating: number | null;
}

type LocalStorageStateProps = {
  initialState: MovieProps[];
  key: string;
}

export function useLocalStorageState({ initialState, key }: LocalStorageStateProps): [MovieProps[], React.Dispatch<React.SetStateAction<MovieProps[]>>] {
  const [value, setValue] = useState<MovieProps[]>( () => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
     () => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}