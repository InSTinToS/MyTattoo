interface ILabelStyleProps {
  stroke?: number
  colors?: {
    text?: string
    border?: string
    background?: string
  }
}

interface ILabelProps extends ILabelStyleProps {
  label: string
  icon?: 'x' | 'v' | '+'
}

export type { ILabelProps, ILabelStyleProps }
