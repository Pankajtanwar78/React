import { useState, useEffect } from 'react';

const KEY = "29ed262e";

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

const useFetchMovies = (query: string) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [movies, setMovies] = useState<MovieApiResponse[]>([]);


  useEffect(() => {

    const controller = new AbortController();

    const fetchMovies = async () => {
      try{
        setLoading(true);
        setError('');
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          {signal: controller.signal}
        );
        if (!response.ok){
          throw new Error("Something went wrong with fetching movies");
        }
        const data = await response.json();
        if (data.Response === false || !data.Search){
          throw new Error("Movie not found");
        }
        setMovies(data.Search);
        setError('');
      }
      catch(err){
        if (err instanceof Error && err.name != 'AbortError') {
          console.log(err.message);
          setError(err.message);
        }
        setMovies([]);
      }
      finally{
        setLoading(false);
      }
    }

    if (query.length < 3){
      setMovies([]);
      setError('');
      setLoading(false);
      return;
    }
    console.log('XYZ')
    fetchMovies();

    return () => {
      controller.abort();
    }

  }, [query]);

  return {isLoading, movies, error};
}

export default useFetchMovies;
