import React from 'react'

const MovieCard = ({movieDetails}) => {

const {poster_path, title, release_date, vote_average, overview, genres} = movieDetails;

const genresList = genres.map(genre => genre.name).join(', ')
const voteAv = (vote_average * 10).toFixed(0)
const release = release_date.slice(0,4)
const imgUrl = 'https://image.tmdb.org/t/p/w500/'.concat(poster_path);


  return (
    <div>
    {poster_path ? <img src={imgUrl} alt=''/> : <img src='' alt=''/>}
    <div>
        <h2>{title} <span>{release}</span></h2>
        <p>User score: {voteAv}</p>
        <p>Overview</p>
        <p>{overview}</p>
        <p>Genre: {genresList}</p>
    </div>
    </div>
  )
}

export default MovieCard