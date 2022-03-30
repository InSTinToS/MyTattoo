import { useTheme } from 'styled-components'

import { TOnSubmit } from 'types/formik'

import { useFormik } from 'formik'

interface IValues {
  search: string
}

const initialValues: IValues = { search: '' }

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

export { SearchFormLogic }
