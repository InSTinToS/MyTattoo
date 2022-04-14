import { useField } from './logic'
import { Error, FieldStyle, Tooltip } from './styles'
import type { IFieldProps } from './types'

import Input from 'components/atoms/Input'
import Alert from 'components/atoms/icons/Alert'
import ClosedEye from 'components/atoms/icons/ClosedEye'
import Eye from 'components/atoms/icons/Eye'

const Field = <FormValues,>({
  name,
  label,
  formik,
  type,
  className = 'Field',
  ...props
}: IFieldProps<FormValues>) => {
  const {
    showEye,
    showEyes,
    hasError,
    inputType,
    hasFilled,
    onEyeClick,
    inputValue,
    onInputBlur,
    errorMessage,
    onInputChange,
    onClosedEyeClick
  } = useField<FormValues>({ formik, name, type })

  return (
    <FieldStyle className={className} hasError={hasError} hasFilled={hasFilled}>
      {hasError && (
        <Tooltip
          trigger={<Alert className='triggerAlert' />}
          content={
            <Error>
              <Alert className='contentAlert' />

              <div>{errorMessage}</div>
            </Error>
          }
        />
      )}

      <label htmlFor={name}>{label}</label>

      <Input
        name={name}
        type={inputType}
        value={inputValue}
        onBlur={onInputBlur}
        onChange={onInputChange}
        {...props}
      />

      {showEyes &&
        (showEye ? (
          <Eye className='eye' size={18} onClick={onEyeClick} />
        ) : (
          <ClosedEye className='eye' size={18} onClick={onClosedEyeClick} />
        ))}
    </FieldStyle>
  )
}

export default Field
