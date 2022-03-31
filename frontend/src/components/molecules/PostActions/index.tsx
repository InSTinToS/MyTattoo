import { PostActionsStyle } from './styles'
import type { IPostActionsProps } from './types'

import Label from 'components/atoms/Label'
import Balloon from 'components/atoms/icons/Balloon/Balloon'
import Heart from 'components/atoms/icons/Heart/Heart'
import OutlinedBalloon from 'components/atoms/icons/OutlinedBalloon/OutlinedBalloon'

import { useTheme } from 'styled-components'

const fakeTattooStyles = ['Maori', 'Old School', 'Tribal', 'Trash', 'Aquarela']

const PostActions = ({ onBalloonClick, ballonFilled }: IPostActionsProps) => {
  const theme = useTheme()

  return (
    <PostActionsStyle>
      <li>
        <Heart color={theme.colors.secondary} size={24} outlined />
      </li>

      <li onClick={onBalloonClick}>
        {ballonFilled ? (
          <Balloon color={theme.colors.secondary} size={24} />
        ) : (
          <OutlinedBalloon color={theme.colors.secondary} size={24} />
        )}
      </li>

      {fakeTattooStyles.map(tattooStyle => (
        <li key={tattooStyle}>
          <Label label={tattooStyle} />
        </li>
      ))}
    </PostActionsStyle>
  )
}

export default PostActions
