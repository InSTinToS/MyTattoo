import type { IValues } from './types'

import type { TOnSubmit } from 'types/formik'

import { useFormik } from 'formik'
import { useTheme } from 'styled-components'

const initialValues: IValues = { search: '' }

const useSearch = () => {
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

export { useSearch }
