import type { IHeartProps } from './types'

import { OutlinedIconStyle } from '../styles'

const Heart = (props: IHeartProps) => (
  <OutlinedIconStyle {...props}>
    <svg viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M5 0C2.239 0 0 2.216 0 4.95C0 7.157 0.875 12.395 9.488 17.69C9.64228 17.7839 9.8194 17.8335 10 17.8335C10.1806 17.8335 10.3577 17.7839 10.512 17.69C19.125 12.395 20 7.157 20 4.95C20 2.216 17.761 0 15 0C12.239 0 10 3 10 3C10 3 7.761 0 5 0Z' />
    </svg>
  </OutlinedIconStyle>
)

export default Heart