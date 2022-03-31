import type { HTMLProps } from 'react'

interface IInputProps extends HTMLProps<HTMLInputElement>, IInputStyleProps {}

interface IInputStyleProps {
  outlined?: boolean
}

export type { IInputStyleProps, IInputProps }
