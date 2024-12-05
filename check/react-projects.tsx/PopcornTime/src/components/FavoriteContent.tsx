import { StyledFavorite, StyledFavoriteHeader, StyledFavoriteHeaderDivTypeA, StyledFavoriteHeaderDivTypeB } from './styles/PopcornTime.styles';
import FavoriteList from './FavoriteList';
import MovieDetails from './MovieDetails';
import { useLocalStorageState } from './useLocalStorageState';

type MovieProps = {
  Title: string;
  imdbID: string; 
  imdbRating: number;
  Runtime: number;
  Poster: string;
  UserRating: number | null;
}

type FavoriteContentProps = {
  selectedId: string | null;
  onSelect: (movieId: string) => void;
}

const FavoriteContent = ({selectedId, onSelect}: FavoriteContentProps) => {
  const [favoriteMovieList, setFavoriteMovieList] = useLocalStorageState({
    initialState: [], 
    key: "favoriteMovieList"});

  function handleAddToList(movie: MovieProps) {
    setFavoriteMovieList((prev: MovieProps[]) => [...prev, movie]);
    onSelect(movie.imdbID);
  }

  const handleFavoriteRemove = (id: string) => {
    console.log('PANK')
    const remainingFavMovies = favoriteMovieList.filter((mov: MovieProps) => mov.imdbID !== id);
    setFavoriteMovieList(remainingFavMovies);

  }

  const roundToTwo = (num: number) => {
    return Math.round(num*100) / 100;
  }

  const selectedMovieExists = favoriteMovieList.find((item: MovieProps) => item.imdbID === selectedId) || null;

  let userRating = 0;
  let imdbRating = 0;
  let runTime = 0;
  const length = favoriteMovieList?.length;
  if (length) {
    userRating = favoriteMovieList.reduce((sum: number, movie: MovieProps) => {
      const value = movie.UserRating !== null ? movie.UserRating.toString() : '0';
      return sum + (Number.isNaN(parseFloat(value)) ? 0 : parseFloat(value));
    }, 0) / length;
    userRating = roundToTwo(userRating);

    imdbRating = favoriteMovieList.reduce((sum: number, movie: MovieProps) => {
      const value = movie.imdbRating.toString();
      return sum + (Number.isNaN(parseFloat(value)) ? 0 : parseFloat(value));
    }, 0) / length;
    imdbRating = roundToTwo(imdbRating);

    runTime = favoriteMovieList.reduce((sum: number, movie: MovieProps) => {
      const value = movie.Runtime.toString();
      return sum + (Number.isNaN(parseFloat(value)) ? 0 : parseFloat(value));
    }, 0) / length;
    runTime = roundToTwo(runTime);
  }
  

  return (
    <StyledFavorite key={selectedId}>

      {!selectedId &&
        <>
          <StyledFavoriteHeader>
            <h2>MOVIES YOU WATCHED</h2>
            <StyledFavoriteHeaderDivTypeA>
              <span>#️⃣</span>
              <p>{length}</p>
              <div>movies</div>
            </StyledFavoriteHeaderDivTypeA>
            <StyledFavoriteHeaderDivTypeB>
              <span>⭐️</span>
              <p>{imdbRating}</p>
            </StyledFavoriteHeaderDivTypeB>
            <StyledFavoriteHeaderDivTypeB>
              <span>🌟</span>
              <p>{userRating}</p>
            </StyledFavoriteHeaderDivTypeB>
            <StyledFavoriteHeaderDivTypeA>
              <span>⏳</span>
              <p>{runTime}</p>
              <div>min</div>
            </StyledFavoriteHeaderDivTypeA>
          </StyledFavoriteHeader>
          <FavoriteList favoriteMovieList={favoriteMovieList} handleFavoriteRemove={handleFavoriteRemove}/>
        </>
        // <button>ABC</button>
      }

      {selectedId && <MovieDetails 
                          selectedId={selectedId} 
                          onAddToList={handleAddToList}
                          onSelect={onSelect}
                          selectedMovieExists={selectedMovieExists}/>}
      
    </StyledFavorite>
  );
}

export default FavoriteContent;
