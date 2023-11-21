import { getMovieCredits } from 'api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Character, Img, Item, List, Name } from './Cast.styled';

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
      <List>
        {cast.length === 0 && <div>Not found</div>}
        {cast.map(({ id, profile_path, name, character }) => (
          <Item key={id}>
            {profile_path ? (
              <Img src={imgUrl.concat(profile_path)} alt="" />) : (<img src="" alt="" />)}
            <div>
              <Name>{name}</Name>
              <Character>Character {character}</Character>
            </div>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default Cast;
