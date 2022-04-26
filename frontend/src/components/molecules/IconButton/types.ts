import { ButtonHTMLAttributes, ReactNode } from 'react'

interface IIconButtonStyleProps {}

interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  outlined: boolean
  outlinedIcon: ReactNode
}

export type { IIconButtonProps, IIconButtonStyleProps }
