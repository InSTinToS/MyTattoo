import { SVGAttributes } from 'react'

interface IIconStyleProps {}

interface IIconProps extends SVGAttributes<SVGElement>, IIconStyleProps {
  title?: string
}

export type { IIconStyleProps, IIconProps }
