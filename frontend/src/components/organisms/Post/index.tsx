import { PostStyle } from './styles'
import { IPostProps } from './types'

import PostHeader from 'components/molecules/PostHeader'

import PostFooter from 'components/organisms/PostFooter'

import tattoo from '@public/tattoo.png'

import Image from 'next/image'

const Post = ({ postHeader }: IPostProps) => (
  <PostStyle>
    <PostHeader
      name={postHeader.name}
      avatar={postHeader.avatar}
      isArtist={postHeader.isArtist}
      description={postHeader.description}
    />

    <Image
      src={tattoo}
      width='100%'
      height='100%'
      alt='tattoo image'
      layout='responsive'
      objectFit='contain'
    />

    <PostFooter />
  </PostStyle>
)

export default Post
