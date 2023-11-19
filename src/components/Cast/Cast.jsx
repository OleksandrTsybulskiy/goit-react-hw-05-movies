import { getMovieCredits } from 'api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const imgUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    getMovieCredits(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <div>
      <ul>
        {cast.length === 0 && <div>Not found</div>}
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            {profile_path ? (
              <img src={imgUrl.concat(profile_path)} alt="" />) : (<img src="" alt="" />)}
            <div>
              <p>{name}</p>
              <p>Character {character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
