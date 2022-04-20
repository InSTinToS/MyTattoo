import { CommentStyle } from './styles'
import type { ICommentProps } from './types'

import Avatar from 'components/atoms/Avatar'

const Comment = ({ name, content, avatar, isArtist }: ICommentProps) => (
  <CommentStyle isArtist={isArtist}>
    <Avatar size={40} src={avatar} />

    <p>
      <b>{name}</b> {content}
    </p>
  </CommentStyle>
)

export default Comment
