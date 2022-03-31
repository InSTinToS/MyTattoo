import { usePostActions } from './logic'
import { PostActionsStyle } from './styles'
import type { IPostActionsProps } from './types'

import BalloonButton from '../BalloonButton'
import HeartButton from '../HeartButton'

import Label from 'components/atoms/Label'

const fakeTattooStyles = ['Maori', 'Old School', 'Tribal', 'Trash', 'Aquarela']

const PostActions = ({ commenting, onBalloonClick }: IPostActionsProps) => {
  const { liked, onHeartClick } = usePostActions()

  return (
    <PostActionsStyle>
      <li>
        <HeartButton liked={liked} onClick={onHeartClick} />
      </li>

      <li>
        <BalloonButton outlined={!commenting} onClick={onBalloonClick} />
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
