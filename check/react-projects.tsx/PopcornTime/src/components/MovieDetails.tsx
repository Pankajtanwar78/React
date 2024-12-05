import { StyledMovieDetailsHeader, 
         StyledMovieDetailsHeaderDetails, 
         StyledMovieDetailsBody,
         StyledMovieDetailsBodyButton,
        StyledLoading, 
        StyledError} from "./styles/PopcornTime.styles";

import StarRating from "./StarComponent";
import { useState } from 'react';
import { useEffect } from 'react';
import useKey from "./useKey";

const KEY = '29ed262e';

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
}

type MovieProps = {
  Title: string;
  imdbID: string; 
  imdbRating: number;
  Runtime: number;
  Poster: string;
  UserRating: number | null;
}

type MovieDetailsProps = {
  selectedId: string;
  onAddToList: (movie: MovieProps) => void;
  onSelect: (movieId: string) => void;
  selectedMovieExists: MovieProps | null;
}

const MovieDetails = ({selectedId, onAddToList, onSelect, selectedMovieExists}: MovieDetailsProps) => {
  const [movieDetails, setMovieDetails] = useState<MovieApiResponse | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [rating, setRating] = useState<number | null>(selectedMovieExists?.UserRating ?? null);
  const [error, setError] = useState<string>('');

  const handleStarRating = (rate: number) => {
    setRating(rate);
  }

  const handleSelectionRemovalOnEscape = () => {
    onSelect(movieDetails?.imdbID ?? '');
  }

  useKey({key: 'escape', action: handleSelectionRemovalOnEscape});


  useEffect(() => {
    if(!selectedId) return;
    const controller = new AbortController();

    const fetchMovieDetails = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`, 
        {signal: controller.signal});

      if(!response.ok){
        throw new Error('Something went wrong with fetching movie details')
      }
      const data = await response.json();
      if ( data.Response === 'False' ){
        throw new Error('Movie details not found');
      }
      setMovieDetails(data);
      setLoading(false);
    }
    catch(err){
      if ( err instanceof Error && err.name != 'AbortError' ){
        console.log(err.message);
        setError(err.message);
        setMovieDetails(null);
      }
    }
    finally{
      setLoading(false);
    }
  }

  fetchMovieDetails();

  return () => {
    controller.abort();
  }

  },[selectedId]);

  const favoriteMovieDetail: MovieProps | null = movieDetails ? {
    Title: movieDetails.Title,
    imdbID: movieDetails.imdbID,
    imdbRating: Number(movieDetails.imdbRating),
    Runtime: Number(movieDetails.Runtime.split(" ")[0]),
    Poster: movieDetails.Poster,
    UserRating: rating
  } : null;

  return (
      <>
        {(isLoading ) && <StyledLoading>Loading...</StyledLoading>}
        {!isLoading && !error && movieDetails && (
        <>
          <StyledMovieDetailsHeader>
            <img 
              src={movieDetails.Poster} 
              alt={movieDetails.Title} />
            <StyledMovieDetailsHeaderDetails>
              <h2>{movieDetails.Title}</h2>
              <p>{movieDetails.Released} • {movieDetails.Runtime}</p>
              <p>{movieDetails.Genre}</p>
              <div>
                <span>⭐️</span>
                <p>{movieDetails.imdbRating} IMDb rating</p>
              </div>
            </StyledMovieDetailsHeaderDetails>
          </StyledMovieDetailsHeader>

          <StyledMovieDetailsBody>
            <div>
              {!selectedMovieExists && <StarRating rating={rating} onRating={handleStarRating}/>}
              {rating && !selectedMovieExists && <StyledMovieDetailsBodyButton 
                            onClick={() => {
                              if (favoriteMovieDetail) {
                                onAddToList(favoriteMovieDetail);
                              }
                            }
                            }>
                              + Add to list
                          </StyledMovieDetailsBodyButton>}
              {
                rating && selectedMovieExists && 
                <div>You rated this movie {rating} <span>⭐️</span></div>
              }
              
            </div>
            <p>{movieDetails.Plot}</p>
            <p>Starring {movieDetails.Actors}</p>
            <p>Directed by {movieDetails.Director}</p>
          </StyledMovieDetailsBody>
        </>
        )}
        {error && <StyledError>{error}</StyledError>}
      </>
  );
}

export default MovieDetails;
