import { useHeartButton } from './logic'
import { HeartButtonStyle } from './styles'
import type { IHeartButtonProps } from './types'

import Heart from 'components/atoms/icons/Heart/Heart'

const HeartButton = ({
  liked,
  type = 'button',
  ...props
}: IHeartButtonProps) => {
  const { likedColor, notLikedColor } = useHeartButton()

  return (
    <HeartButtonStyle type={type} {...props}>
      {liked ? (
        <Heart color={likedColor} size={24} />
      ) : (
        <Heart color={notLikedColor} size={24} outlined />
      )}
    </HeartButtonStyle>
  )
}

export default HeartButton
