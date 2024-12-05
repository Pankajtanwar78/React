import {useState} from 'react';
import Movie from './Movie';
import { StyledSearch, StyledMovies, StyledLoading, StyledError, StyledHideButton } from "./styles/PopcornTime.styles";

type MovieApiResponse = {
  Title: string;
  imdbID: string; 
  imdbRating: string;
  Runtime: string;
  Poster: string;
  Released: string;
  Genre: string;
  Plot: string;
  Actors: string;
  Director: string;
  Response: string;
  Year: string;
}

type MovieListProps = {
  isLoading: boolean;
  movies: MovieApiResponse[];
  error: string;
  onSelect: (movieId: string) => void;
}

const MovieList = ({isLoading, movies, error, onSelect}: MovieListProps) => {
  const [hide, setHide] = useState<boolean>(false)
  return (
    <StyledSearch>
      {isLoading && <StyledLoading>Loading...</StyledLoading>}
      { !isLoading && !error && 
        <StyledMovies>
          <StyledHideButton hide={hide} onClick={() => setHide(!hide)}>
            {hide ? '+': '-'}
          </StyledHideButton>
          {!hide && <Movie movies={movies} onSelect={onSelect}/>}
          
          
        </StyledMovies>
      }
      {error && <StyledError>{error}</StyledError>}
    </StyledSearch>
  );
}

export default MovieList;
