import { Container } from './styles'
import Image from 'next/image'
import React from 'react'

import PostFooter from '../PostFooter'

import PostHeader, {
  IProps as IPostHeaderProps
} from 'components/molecules/PostHeader'

import tattoo from '@public/tattoo.png'

interface IProps {
  postHeader: IPostHeaderProps
}

const Post = ({ postHeader }: IProps) => (
  <Container>
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
  </Container>
)

export default Post
