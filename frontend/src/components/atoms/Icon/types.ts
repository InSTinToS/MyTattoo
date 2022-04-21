import { HTMLAttributes } from 'react'

interface IIconStyleProps extends HTMLAttributes<HTMLDivElement> {}

interface IIconProps extends IIconStyleProps {
  title?: string
}

export type { IIconStyleProps, IIconProps }
