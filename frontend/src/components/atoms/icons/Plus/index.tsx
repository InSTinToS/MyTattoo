import type { IIconProps } from '../types'

import { composeClassName } from 'utils/composeClassName'

import Icon from '..'

const Plus = ({ className, ...props }: IIconProps) => (
  <Icon className={composeClassName('Plus', className)} {...props}>
    <svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
      <path d='M-3.49691e-07 8C-3.61284e-07 7.73478 0.105357 7.48043 0.292893 7.29289C0.480429 7.10536 0.734783 7 1 7L7 7L7 1C7 0.734783 7.10536 0.480429 7.29289 0.292892C7.48043 0.105356 7.73478 -3.38098e-07 8 -3.49691e-07C8.26522 -3.61284e-07 8.51957 0.105356 8.70711 0.292892C8.89464 0.480428 9 0.734783 9 1L9 7L15 7C15.2652 7 15.5196 7.10536 15.7071 7.29289C15.8946 7.48043 16 7.73478 16 8C16 8.26522 15.8946 8.51957 15.7071 8.70711C15.5196 8.89464 15.2652 9 15 9L9 9L9 15C9 15.2652 8.89464 15.5196 8.70711 15.7071C8.51957 15.8946 8.26522 16 8 16C7.73478 16 7.48043 15.8946 7.29289 15.7071C7.10536 15.5196 7 15.2652 7 15L7 9L1 9C0.734783 9 0.480429 8.89464 0.292893 8.70711C0.105357 8.51957 -3.38098e-07 8.26522 -3.49691e-07 8V8Z' />
    </svg>
  </Icon>
)

export default Plus
