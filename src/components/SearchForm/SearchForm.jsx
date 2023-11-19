import React from 'react'

const SearchForm = ({onChange, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange}/>
        <button>Search</button>
    </form>
  )
}

export default SearchForm