import { HTMLAttributes, HTMLProps } from 'react'

interface IIconStyleProps extends HTMLAttributes<HTMLDivElement> {
  size: number
  color: string
}

interface IOutlinedIconStyleProps extends IIconStyleProps {
  outlined?: boolean
}

export type { IIconStyleProps, IOutlinedIconStyleProps }
