import { StyledMovie, StyledYear } from "./styles/PopcornTime.styles";

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

type MovieProps = {
  movies: MovieApiResponse[];
  onSelect: (movieId: string) => void;
}

const Movie = ({movies, onSelect}: MovieProps) => {
  return (
    <div>
      {movies.map((movie) => (
        <StyledMovie 
          key={movie.imdbID}
          onClick={() => {onSelect(movie.imdbID)}}>
        
          <img src={movie.Poster} alt={movie.Title}/>
          <h2>{movie.Title}</h2>
          <StyledYear>
              <span>🗓</span>
              <span>{movie.Year}</span>
          </StyledYear>
        </StyledMovie>
        ))}
    </div>
  );
}

export default Movie;
