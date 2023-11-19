import { getMovieByName } from 'api'
import MovieList from 'components/MovieList/MovieList'
import SearchForm from 'components/SearchForm/SearchForm'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Movies = () => {

  const [query, setQuery] = useState('')
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const query = searchParams.get('query') ?? ''

    if (!query) {
      return
    }

    getMovieByName(query).then(setMovie)

  }, [searchParams])

  const onChange = (e) =>{
    setQuery(e.currentTarget.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setSearchParams(query !== '' ? {query} : {})
  }

  return (
    <div>
      <SearchForm onSubmit={onSubmit} onChange={onChange}/>
      <MovieList movies={movie}/>
    </div>
  )
}

export default Movies