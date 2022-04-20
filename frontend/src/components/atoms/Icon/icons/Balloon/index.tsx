import Icon from '../../'
import type { IIconProps } from '../../types'

import { composeClassName } from 'utils/composeClassName'

const Balloon = ({ className, ...props }: IIconProps) => (
  <Icon className={composeClassName('Balloon', className)} {...props}>
    <svg viewBox='0 0 16 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M16 7C16 10.866 12.418 14 8 14C7.20765 14.0011 6.41859 13.8982 5.653 13.694C5.069 13.99 3.728 14.558 1.472 14.928C1.272 14.96 1.12 14.752 1.199 14.566C1.553 13.73 1.873 12.616 1.969 11.6C0.744 10.37 0 8.76 0 7C0 3.134 3.582 0 8 0C12.418 0 16 3.134 16 7ZM5 7C5 6.73478 4.89464 6.48043 4.70711 6.29289C4.51957 6.10536 4.26522 6 4 6C3.73478 6 3.48043 6.10536 3.29289 6.29289C3.10536 6.48043 3 6.73478 3 7C3 7.26522 3.10536 7.51957 3.29289 7.70711C3.48043 7.89464 3.73478 8 4 8C4.26522 8 4.51957 7.89464 4.70711 7.70711C4.89464 7.51957 5 7.26522 5 7V7ZM9 7C9 6.73478 8.89464 6.48043 8.70711 6.29289C8.51957 6.10536 8.26522 6 8 6C7.73478 6 7.48043 6.10536 7.29289 6.29289C7.10536 6.48043 7 6.73478 7 7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V7ZM12 8C12.2652 8 12.5196 7.89464 12.7071 7.70711C12.8946 7.51957 13 7.26522 13 7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7C11 7.26522 11.1054 7.51957 11.2929 7.70711C11.4804 7.89464 11.7348 8 12 8V8Z' />
    </svg>
  </Icon>
)

export default Balloon