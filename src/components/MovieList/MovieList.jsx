import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
    const location = useLocation()
    const imgUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <div>
      <ul>
        {movies.map(({id, title, original_name, poster_path}) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{from:location}}>
                {poster_path ? <img src={imgUrl.concat(poster_path)} alt=''/> : <img src='' alt=''/>}
              <p>{title ?? original_name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
