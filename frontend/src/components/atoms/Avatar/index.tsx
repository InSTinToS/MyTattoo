import { AvatarStyle } from './styles'
import type { IAvatarProps } from './types'

import { composeClassName } from 'utils/composeClassName'

const Avatar = ({ size, className, ...props }: IAvatarProps) => (
  <AvatarStyle
    alt='avatar'
    width={size}
    height={size}
    layout='fixed'
    className={composeClassName('Avatar', className)}
    {...props}
  />
)

export default Avatar
