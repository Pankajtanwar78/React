import { StyledFavoriteMovie, StyledFavoriteDetails, 
        StyledFavoriteDetailsContent, StyledFavoriteButton,
        StyledFavoriteMovieDetails } from './styles/PopcornTime.styles';


type MovieProps = {
  Title: string;
  imdbID: string; 
  imdbRating: number;
  Runtime: number;
  Poster: string;
  UserRating: number | null;
}

type FavoriteProps = {
  favoriteMovieList: MovieProps[];
  handleFavoriteRemove: (id: string) => void;
}

const Favorite = ({favoriteMovieList, handleFavoriteRemove}: FavoriteProps) => {

  return (
    <>
      { 
        favoriteMovieList.map((favMovie, index) => 
          <StyledFavoriteMovie key={index}>
          <img src={favMovie.Poster} alt={favMovie.Title}/>
          <StyledFavoriteMovieDetails>
            <h2>{favMovie.Title}</h2>
            <StyledFavoriteDetails>
              <StyledFavoriteDetailsContent>
                <span>⭐️</span>
                <span>{favMovie.imdbRating}</span>
              </StyledFavoriteDetailsContent>
              <StyledFavoriteDetailsContent>
                <span>🌟</span>
                <span>{favMovie.UserRating}</span>
              </StyledFavoriteDetailsContent>
              <StyledFavoriteDetailsContent>
                <span>⏳</span>
                <span>{favMovie.Runtime} min</span>
              </StyledFavoriteDetailsContent>
              <StyledFavoriteButton onClick={() => {
                handleFavoriteRemove(favMovie.imdbID)}}>x</StyledFavoriteButton>
            </StyledFavoriteDetails>
          </StyledFavoriteMovieDetails>
      </StyledFavoriteMovie>
      )}
    </>
  )

}

export default Favorite;
