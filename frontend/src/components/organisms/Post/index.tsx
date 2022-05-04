/* eslint-disable @next/next/no-img-element */
import { PostStyle } from './styles'
import type { IPostProps } from './types'

import PostHeader from 'components/molecules/PostHeader'

import PostFooter from 'components/organisms/PostFooter'

const Post = ({ postHeader, forwardedAs, ...props }: IPostProps) => (
  <PostStyle as={forwardedAs} {...props}>
    <article>
      <PostHeader
        name={postHeader.name}
        avatar={postHeader.avatar}
        isArtist={postHeader.isArtist}
        description={postHeader.description}
      />

      <img
        tabIndex={0}
        width='100%'
        height='100%'
        src='/tattoo.png'
        alt='Tatuagem no antebraço com a representação do deus Anúbis'
      />
    </article>

    <PostFooter />
  </PostStyle>
)

export default Post
