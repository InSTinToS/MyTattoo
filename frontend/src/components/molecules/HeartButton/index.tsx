import { HeartButtonStyle } from './styles'
import type { IHeartButtonProps } from './types'

import Heart from 'components/atoms/Icon/icons/Heart'

const HeartButton = ({
  liked,
  type = 'button',
  ...props
}: IHeartButtonProps) => {
  return (
    <HeartButtonStyle type={type} {...props}>
      {liked ? <Heart className='liked' /> : <Heart />}
    </HeartButtonStyle>
  )
}

export default HeartButton
