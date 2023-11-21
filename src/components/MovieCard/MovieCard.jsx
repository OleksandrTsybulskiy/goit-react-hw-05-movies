import React from 'react'
import { Container, Description, Img, Text, Title, Wrapper, Year } from './MovieCard.styled';

const MovieCard = ({movieDetails}) => {

const {poster_path, title, release_date, vote_average, overview, genres} = movieDetails;

const genresList = genres.map(genre => genre.name).join(', ')
const voteAv = (vote_average * 10).toFixed(0)
const release = release_date.slice(0,4)
const imgUrl = 'https://image.tmdb.org/t/p/w500/'.concat(poster_path);


  return (
    <Container>
    {poster_path ? <Img src={imgUrl} alt=''/> : <img src='' alt=''/>}
    <Wrapper>
        <Title>{title} <Year>{release}</Year></Title>
        <Text>User score: {voteAv}</Text>
        <Description>Overview</Description>
        <Text>{overview}</Text>
        <Text>Genre: {genresList}</Text>
    </Wrapper>
    </Container>
  )
}

export default MovieCard