import { usePostActions } from './logic'
import { PostActionsStyle } from './styles'
import type { IPostActionsProps } from './types'

import HeartButton from '../HeartButton'
import IconButton from '../IconButton'

import Balloon from 'components/atoms/Icon/icons/Balloon'
import OutlinedBalloon from 'components/atoms/Icon/icons/OutlinedBalloon'
import OutlinedTattoo from 'components/atoms/Icon/icons/OutlinedTattoo'
import Tattoo from 'components/atoms/Icon/icons/Tattoo'

const PostActions = ({
  commenting,
  onBalloonClick,
  showingStyles,
  onTattooClick
}: IPostActionsProps) => {
  const { liked, onHeartClick } = usePostActions()

  return (
    <PostActionsStyle>
      <li>
        <HeartButton liked={liked} onClick={onHeartClick} />
      </li>

      <li>
        <IconButton
          icon={<Balloon />}
          outlined={!commenting}
          onClick={onBalloonClick}
          outlinedIcon={<OutlinedBalloon />}
        />
      </li>

      <li>
        <IconButton
          icon={<Tattoo />}
          onClick={onTattooClick}
          outlined={!showingStyles}
          outlinedIcon={<OutlinedTattoo />}
        />
      </li>
    </PostActionsStyle>
  )
}

export default PostActions
