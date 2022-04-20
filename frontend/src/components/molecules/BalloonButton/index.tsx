import { BalloonButtonStyle } from './styles'
import type { IBalloonButtonProps } from './types'

import Balloon from 'components/atoms/Icon/icons/Balloon'
import OutlinedBalloon from 'components/atoms/Icon/icons/OutlinedBalloon'

const BalloonButton = ({
  outlined,
  type = 'button',
  ...buttonProps
}: IBalloonButtonProps) => (
  <BalloonButtonStyle type={type} {...buttonProps}>
    {outlined ? <OutlinedBalloon /> : <Balloon />}
  </BalloonButtonStyle>
)

export default BalloonButton
