import { ButtonStyle } from './styles'
import type { IButtonProps } from './types'

const Button = ({
  children,
  icon: Icon,
  colors,
  stroke,
  padding,
  ...props
}: IButtonProps) => (
  <ButtonStyle colors={colors} stroke={stroke} padding={padding} {...props}>
    {Icon && Icon}

    <span>{children}</span>
  </ButtonStyle>
)

export default Button
