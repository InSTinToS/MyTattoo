import { PostHeaderStyle } from './styles'
import type { IPostHeaderProps } from './types'

import Image from 'next/image'

const PostHeader = ({
  avatar,
  description,
  name,
  isArtist
}: IPostHeaderProps) => (
  <PostHeaderStyle>
    <Image src={avatar} alt='avatar' width={40} height={40} />

    <div>
      <span>{name}</span>

      {isArtist && <div>Artist</div>}
    </div>

    <p>{description}</p>
  </PostHeaderStyle>
)

export default PostHeader
