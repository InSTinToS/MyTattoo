import { usePostFooter } from './logic'
import { PostFooterStyle } from './styles'

import PostActions from 'components/molecules/PostActions'

import Comments from 'components/organisms/Comments'

const PostFooter = () => {
  const { commenting, onBalloonClick } = usePostFooter()

  return (
    <PostFooterStyle>
      <PostActions commenting={commenting} onBalloonClick={onBalloonClick} />

      {commenting && <Comments />}
    </PostFooterStyle>
  )
}

export default PostFooter
