import React from 'react';
import { useLocation } from 'react-router-dom';
import { MovieImg, MovieItem, MovieLink, MovieListStyle, MovieName, Wrapper } from './MovieList.styled';

const MovieList = ({ movies }) => {
    const location = useLocation()
    const imgUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <Wrapper>
      <MovieListStyle>
        {movies.map(({id, title, original_name, poster_path}) => (
          <MovieItem key={id}>
            <MovieLink to={`/movies/${id}`} state={{from:location}}>
                {poster_path ? <MovieImg src={imgUrl.concat(poster_path)} alt=''/> : <img src='' alt=''/>}
              <MovieName>{title ?? original_name}</MovieName>
            </MovieLink>
          </MovieItem>
        ))}
      </MovieListStyle>
    </Wrapper>
  );
};

export default MovieList;
