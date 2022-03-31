import { usePostFooter } from './logic'
import { PostFooterStyle } from './styles'

import PostActions from 'components/molecules/PostActions'

import Comments from 'components/organisms/Comments'

const PostFooter = () => {
  const { isCommentsOpen, onBalloonClick } = usePostFooter()

  return (
    <PostFooterStyle>
      <PostActions
        ballonFilled={isCommentsOpen}
        onBalloonClick={onBalloonClick}
      />

      {isCommentsOpen && <Comments />}
    </PostFooterStyle>
  )
}

export default PostFooter
