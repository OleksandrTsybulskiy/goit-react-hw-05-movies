import { useEffect } from "react";
import { useState } from "react";
import { getTrendingMovies } from "api";
import { MovieList } from "components/MovieList/MovieList";

export const Home = () => {
const [movies, setMovies] = useState([])

useEffect(() => {
getTrendingMovies().then(setMovies)
}, [movies])

  return (
    <div>
        <p></p>
        <MovieList movies={movies}></MovieList>
    </div>
  )
};
