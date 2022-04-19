import { ButtonStyle } from './styles'
import type { IButtonProps } from './types'

import { composeClassName } from 'utils/composeClassName'

const Button = ({
  children,
  className,
  icon: Icon,
  variant = 'primary',
  ...props
}: IButtonProps) => (
  <ButtonStyle
    variant={variant}
    className={composeClassName('Button', className)}
    {...props}
  >
    {Icon && Icon}

    <div className='content'>{children}</div>
  </ButtonStyle>
)

export default Button
