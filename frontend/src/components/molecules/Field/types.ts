import { IInputProps } from 'components/atoms/Input/types'

import { FormikProps } from 'formik'

interface IUseFieldParams<FormValues> {
  name: string
  type?: string
  formik: FormikProps<FormValues>
}

interface IFieldStyleProps {
  hasError: boolean
  hasFilled: boolean
}

interface IFieldProps<FormValues>
  extends IUseFieldParams<FormValues>,
    Omit<IInputProps, 'name'> {
  label: string
}

export type { IFieldProps, IFieldStyleProps, IUseFieldParams }
