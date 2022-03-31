import { useSearch } from './logic'
import { SearchStyle } from './styles'

import Input from 'components/atoms/Input'
import SearchIcon from 'components/atoms/icons/SearchBalloon/Search'

const Search = () => {
  const { searchIconColor, formik } = useSearch()

  return (
    <SearchStyle>
      <SearchIcon color={searchIconColor} size={20} />

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
