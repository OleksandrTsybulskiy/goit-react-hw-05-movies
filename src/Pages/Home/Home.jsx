import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'api';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies)
  }, []);

  return (
    <div>
      <h2>Tending this week</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
