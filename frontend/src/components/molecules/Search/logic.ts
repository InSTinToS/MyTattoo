import type { IValues } from './types'

import { FormikConfig, useFormik } from 'formik'
import { useTheme } from 'styled-components'

const initialValues: IValues = { search: '' }

const useSearch = () => {
  const theme = useTheme()

  const onSearchFormSubmit: FormikConfig<IValues>['onSubmit'] = values => {
    console.log(values)
  }

  const formik = useFormik({ initialValues, onSubmit: onSearchFormSubmit })

  return { formik, theme }
}

export { useSearch }
