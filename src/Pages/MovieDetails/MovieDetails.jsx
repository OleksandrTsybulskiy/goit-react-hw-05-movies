import { getMovieDetails } from 'api';
import MovieCard from 'components/MovieCard/MovieCard';
import React, { Suspense, useState, useEffect } from 'react';
import {
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { AddInfo, BackLink, Container } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  const backLink = location.state?.from ?? '/';

  return (
    <div>
      <BackLink to={backLink}>Go back</BackLink>
      <MovieCard movieDetails={movieDetails} />
      <Container>
        <AddInfo to={'cast'} state={{ from: backLink }}>
          Cast
        </AddInfo>
        <AddInfo to={'reviews'} state={{ from: backLink }}>
          Reviews
        </AddInfo>
      </Container>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
