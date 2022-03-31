interface IIconStyleProps {
  size: number
  color: string
}

interface IOutlinedIconStyleProps extends IIconStyleProps {
  outlined?: boolean
}

export type { IIconStyleProps, IOutlinedIconStyleProps }
