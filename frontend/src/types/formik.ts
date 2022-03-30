import { FormikHelpers, FormikValues } from 'formik'

type TOnSubmit = (
  values: FormikValues,
  helpers: FormikHelpers<FormikValues>
) => void

export type { TOnSubmit }
