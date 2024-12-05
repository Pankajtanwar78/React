import { StyledFavorites } from "./styles/PopcornTime.styles";
import Favorite from './Favorite';

type MovieProps = {
  Title: string;
  imdbID: string; 
  imdbRating: number;
  Runtime: number;
  Poster: string;
  UserRating: number | null;
}

type FavoriteListProps = {
  handleFavoriteRemove: (id: string) => void;
  favoriteMovieList: MovieProps[];
}

const FavoriteList = ({favoriteMovieList, handleFavoriteRemove}: FavoriteListProps) => {
  return (
    <StyledFavorites>
      <Favorite favoriteMovieList={favoriteMovieList} handleFavoriteRemove={handleFavoriteRemove}/>
    </StyledFavorites>
  );
}

export default FavoriteList;
