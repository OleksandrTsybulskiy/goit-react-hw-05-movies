import React from 'react'
import { Form, Button, Input } from './SearchForm.styled'

const SearchForm = ({onChange, onSubmit}) => {
  return (
    <Form onSubmit={onSubmit}>
        <Input type="text" onChange={onChange}/>
        <Button>Search</Button>
    </Form>
  )
}

export default SearchForm