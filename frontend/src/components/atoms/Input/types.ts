import { HTMLProps } from 'react'

interface IInputStyleProps {
  outlined?: boolean
}

interface IInputProps extends HTMLProps<HTMLInputElement>, IInputStyleProps {}

export type { IInputStyleProps, IInputProps }
