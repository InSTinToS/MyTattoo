import { useSearch } from './logic'
import { SearchStyle } from './styles'

import SearchIcon from 'components/atoms/Icon/icons/Search'
import Input from 'components/atoms/Input'

const Search = () => {
  const { formik } = useSearch()

  return (
    <SearchStyle>
      <SearchIcon />

      <form onSubmit={formik.handleSubmit}>
        <Input
          name='search'
          spellCheck='false'
          placeholder='Procure as melhores tatuagens!'
        />
      </form>
    </SearchStyle>
  )
}

export default Search
