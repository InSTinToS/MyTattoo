import { ComponentPropsWithoutRef } from 'react'

interface IInputStyleProps {
  outline?: string
  outlined?: boolean
}

interface IInputProps
  extends ComponentPropsWithoutRef<'input'>,
    IInputStyleProps {}

export type { IInputStyleProps, IInputProps }
