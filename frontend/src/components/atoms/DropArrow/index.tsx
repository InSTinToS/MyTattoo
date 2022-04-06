import { useDropArrow } from './logic'
import type { IDropArrowProps } from './types'

import Arrow from '../icons/Arrow'

const DropArrow = ({ condition, ...props }: IDropArrowProps) => {
  const { arrowAnimation } = useDropArrow(condition)

  return <Arrow size={18} style={arrowAnimation} {...props} />
}

export default DropArrow
