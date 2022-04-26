import { PostHeaderStyle } from './styles'
import type { IPostHeaderProps } from './types'

import Avatar from 'components/atoms/Avatar'

const PostHeader = ({
  name,
  avatar,
  isArtist,
  description
}: IPostHeaderProps) => {
  const avatarSize = 40

  return (
    <PostHeaderStyle avatarSize={avatarSize}>
      <Avatar src={avatar} size={avatarSize} />

      <strong>{name}</strong>

      {isArtist && <b className='isArtist'>Artist</b>}

      <p>{description}</p>
    </PostHeaderStyle>
  )
}

export default PostHeader
