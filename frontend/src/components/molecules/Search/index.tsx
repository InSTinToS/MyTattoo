import { Container } from './styles'
import { SearchFormLogic } from './logic'

import SearchIcon from 'components/atoms/icons/Search'
import React from 'react'

const Search = () => {
  const { searchIconColor, formik } = SearchFormLogic()

  return (
    <Container>
      <SearchIcon color={searchIconColor} size={20} />

      <form onSubmit={formik.handleSubmit}>
        <input
          name='search'
          spellCheck='false'
          placeholder='Procure as melhores tatuagens!'
        />
      </form>
    </Container>
  )
}

export default Search
