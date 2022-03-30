import { TOnSubmit } from 'types/formik'

import { useFormik } from 'formik'
import { useTheme } from 'styled-components'

interface Values {
  search: string
}

const initialValues: Values = { search: '' }

const SearchFormLogic = () => {
  const theme = useTheme()

  const onSearchFormSubmit: TOnSubmit = values => {
    console.log(values)
  }

  const formik = useFormik({
    initialValues,
    onSubmit: onSearchFormSubmit
  })

  return { formik, searchIconColor: theme.colors.secondary }
}

export type { Values }
export { SearchFormLogic }
