import { Container } from './styles'
import React, { useState } from 'react'

import PostActions from 'components/molecules/PostActions'

import Comments from 'components/organisms/Comments'

const PostFooter = () => {
  const [isCommentsOpen, setIsCommentsOpen] = useState(false)

  return (
    <Container>
      <PostActions
        ballonFilled={isCommentsOpen}
        onBalloonClick={() => {
          setIsCommentsOpen(prev => !prev)
        }}
      />

      {isCommentsOpen && <Comments />}
    </Container>
  )
}

export default PostFooter
