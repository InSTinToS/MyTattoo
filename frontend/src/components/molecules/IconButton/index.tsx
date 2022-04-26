import { IconButtonStyle } from './styles'
import type { IIconButtonProps } from './types'

import { composeClassName } from 'utils/composeClassName'

const IconButton = ({
  outlined,
  className,
  icon: Icon,
  type = 'button',
  outlinedIcon: OutlinedIcon,
  ...buttonProps
}: IIconButtonProps) => (
  <IconButtonStyle
    type={type}
    className={composeClassName('IconButton', className)}
    {...buttonProps}
  >
    {outlined ? OutlinedIcon : Icon}
  </IconButtonStyle>
)

export default IconButton
