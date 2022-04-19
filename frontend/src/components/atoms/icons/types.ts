import { HTMLAttributes } from 'react'

interface IIconStyleProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
  color?: string
}

interface IOutlinedIconStyleProps extends IIconStyleProps {
  outlined?: boolean
}

interface IIconProps extends IIconStyleProps {}

export type { IIconStyleProps, IOutlinedIconStyleProps, IIconProps }
