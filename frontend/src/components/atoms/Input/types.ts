import { HTMLProps } from 'react'

interface IInputProps extends HTMLProps<HTMLInputElement> {}

interface IInputStyleProps {
  outlined?: boolean
}

export type { IInputStyleProps, IInputProps }
