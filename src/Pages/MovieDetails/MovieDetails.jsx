import { getMovieDetails } from 'api';
import MovieCard from 'components/MovieCard/MovieCard';
import React, { Suspense, useState, useEffect } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

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
      <Link to={backLink}>Go back</Link>
      <MovieCard movieDetails={movieDetails} />
      <div>
        <NavLink to={'cast'} state={{ from: backLink }}>
          Cast
        </NavLink>
        <NavLink to={'reviews'} state={{ from: backLink }}>
          Reviews
        </NavLink>
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
