import { Container } from './styles'
import React from 'react'
import { useTheme } from 'styled-components'

import Label from 'components/atoms/Label'
import Balloon from 'components/atoms/icons/Balloon'
import Heart from 'components/atoms/icons/Heart'
import OutlinedBalloon from 'components/atoms/icons/OutlinedBalloon'

const fakeTattooStyles = ['Maori', 'Old School', 'Tribal', 'Trash', 'Aquarela']

interface IPostActions {
  ballonFilled: boolean
  onBalloonClick: () => void
}

const PostActions = ({ onBalloonClick, ballonFilled }: IPostActions) => {
  const theme = useTheme()

  return (
    <Container>
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
    </Container>
  )
}

export default PostActions
