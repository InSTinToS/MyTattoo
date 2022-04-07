import { ButtonHTMLAttributes, ReactNode } from 'react'

interface IButtonStyleProps {
  stroke?: number
  padding?: string
  colors?: {
    text?: string
    border?: string
    background?: string
  }
}

interface IButtonProps
  extends IButtonStyleProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
}

export type { IButtonProps, IButtonStyleProps }
