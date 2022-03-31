import { CommentStyle } from './styles'
import type { ICommentProps } from './types'

import Image from 'next/image'

const Comment = ({ name, content, avatar, isArtist }: ICommentProps) => (
  <CommentStyle isArtist={isArtist}>
    <Image width={40} height={40} alt='avatar' src={avatar} layout='fixed' />

    <p>
      <b>{name}</b> {content}
    </p>
  </CommentStyle>
)

export default Comment
