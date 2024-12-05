import { useState } from 'react';
import { StyledBody, StyledWeb } from './components/styles/PopcornTime.styles';
import GlobalStyles from './components/styles/global.styles';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import FavoriteContent from './components/FavoriteContent';
import useFetchMovies from './components/useFetchMovies';

const App = () => {

  const [query, setQuery] = useState<string>('');
  const {isLoading, movies, error} = useFetchMovies(query);
  const [selectedId, setSelectedId] = useState<string | null>(null)
  
  const handleQuery = (val: string) => {
    setQuery(val);
  }

  const handleMovieSelection = (movieId: string) => {
    if ( selectedId && selectedId === movieId ){
      setSelectedId(null)
    }
    else{
      setSelectedId(movieId);
    }
  }

  // console.log(movies);
  const moviesLength = movies.length;

  return (
    <StyledWeb>
      <GlobalStyles />
      <NavBar 
        query={query} 
        onQuery={handleQuery} 
        moviesLength={moviesLength}
        />
      <StyledBody>
        <MovieList 
          isLoading={isLoading}
          movies={movies}
          error={error}
          onSelect={handleMovieSelection}
          />
        <FavoriteContent selectedId={selectedId} onSelect={handleMovieSelection}/>
      </StyledBody>
    </StyledWeb>
  );
}

export default App;
