import { PostStyle } from './styles'
import type { IPostProps } from './types'

import PostHeader from 'components/molecules/PostHeader'

import PostFooter from 'components/organisms/PostFooter'

import Image from 'next/image'

const Post = ({ postHeader, forwardedAs, ...props }: IPostProps) => (
  <PostStyle as={forwardedAs} {...props}>
    <article>
      <PostHeader
        name={postHeader.name}
        avatar={postHeader.avatar}
        isArtist={postHeader.isArtist}
        description={postHeader.description}
      />

      <Image
        width='100%'
        height='100%'
        priority={true}
        src='/tattoo.png'
        alt='tattoo image'
        layout='responsive'
        objectFit='contain'
      />
    </article>

    <PostFooter />
  </PostStyle>
)

export default Post
