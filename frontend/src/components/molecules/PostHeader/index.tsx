import { PostHeaderStyle } from './styles'
import type { IPostHeaderProps } from './types'

import Avatar from 'components/atoms/Avatar'

const PostHeader = ({
  name,
  avatar,
  isArtist,
  description
}: IPostHeaderProps) => (
  <PostHeaderStyle>
    <Avatar src={avatar} size={40} />

    <div>
      <span>{name}</span>

      {isArtist && <div>Artist</div>}
    </div>

    <p>{description}</p>
  </PostHeaderStyle>
)

export default PostHeader
