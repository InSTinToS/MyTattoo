import { IconStyle } from './styles'
import type { IIconProps } from './types'

import { composeClassName } from 'utils/composeClassName'

const Icon = ({ children, className, title, ...props }: IIconProps) => (
  <IconStyle
    xmlns='http://www.w3.org/2000/svg'
    className={composeClassName('Icon', className)}
    {...props}
  >
    <title>{title}</title>

    {children}
  </IconStyle>
)

export default Icon
