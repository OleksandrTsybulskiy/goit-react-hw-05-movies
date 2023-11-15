import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {movies.map(({ id, title, original_name, poster_path }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={location}>
              {poster_path ?? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt=""
                />
              )}
              <h2>{title ?? original_name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
