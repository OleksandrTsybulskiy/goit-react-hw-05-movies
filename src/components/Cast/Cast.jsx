import { getMovieCredits } from 'api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Character, Img, Item, List, Name } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  const imgUrl = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=500x750'

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
            {profile_path ? (<Img src={imgUrl.concat(profile_path)} alt="" />) : (<Img src={defaultImg} alt="" />)}
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
