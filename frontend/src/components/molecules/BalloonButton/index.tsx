import { useBalloonButton } from './logic'
import { BalloonButtonStyle } from './styles'
import type { IBalloonButtonProps } from './types'

import Balloon from 'components/atoms/icons/Balloon/Balloon'
import OutlinedBalloon from 'components/atoms/icons/OutlinedBalloon/OutlinedBalloon'

const BalloonButton = ({
  outlined,
  type = 'button',
  ...buttonProps
}: IBalloonButtonProps) => {
  const { theme } = useBalloonButton()

  return (
    <BalloonButtonStyle type={type} {...buttonProps}>
      {outlined ? (
        <OutlinedBalloon color={theme.colors.secondary} size={24} />
      ) : (
        <Balloon color={theme.colors.secondary} size={24} />
      )}
    </BalloonButtonStyle>
  )
}

export default BalloonButton
