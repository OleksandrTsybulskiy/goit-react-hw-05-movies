import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'api';
import MovieList from 'components/MovieList/MovieList';
import { MainTitle } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies)
  }, []);

  return (
    <div>
      <MainTitle>Tending this week</MainTitle>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
