import { useSearch } from './logic'
import { SearchStyle } from './styles'

import Input from 'components/atoms/Input'
import SearchIcon from 'components/atoms/icons/Search'

const Search = () => {
  const { theme, formik } = useSearch()

  return (
    <SearchStyle>
      <SearchIcon color={theme.colors.secondary} size={20} />

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
