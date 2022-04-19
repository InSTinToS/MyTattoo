import { IconStyle } from './styles'
import { IIconProps } from './types'

import { composeClassName } from 'utils/composeClassName'

const Icon = ({ children, className, ...props }: IIconProps) => (
  <IconStyle className={composeClassName('Icon', className)} {...props}>
    {children}
  </IconStyle>
)

export default Icon
