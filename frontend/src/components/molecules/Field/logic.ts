import type { IUseFieldParams } from './types'

import { useState } from 'react'

const useField = <FormValues>({
  name,
  type,
  formik
}: IUseFieldParams<FormValues>) => {
  const [showPassword, setShowPassword] = useState(false)

  const inputValue = formik.values[name]
  const errorMessage = formik.errors[name]
  const inputTouched = formik.touched[name]
  const hasFilled = !!inputValue

  const onInputBlur = formik.handleBlur
  const onInputChange = formik.handleChange
  const hasError = errorMessage && inputTouched

  const showEyes = type === 'password'
  const inputType =
    type === 'password' ? (showPassword ? 'text' : 'password') : type
  const showEye = inputType === 'password'

  const onEyeClick = () => {
    setShowPassword(true)
  }

  const onClosedEyeClick = () => {
    setShowPassword(false)
  }

  return {
    showEye,
    showEyes,
    hasError,
    hasFilled,
    inputType,
    onEyeClick,
    inputValue,
    onInputBlur,
    errorMessage,
    onInputChange,
    onClosedEyeClick
  }
}

export { useField }
