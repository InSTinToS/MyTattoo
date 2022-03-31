import { Container, IContainerProps } from './styles'
import Image from 'next/image'
import React from 'react'

interface IProps extends IContainerProps {
  name: string
  avatar: string
  content: string
}

const Comment = ({ name, content, avatar, isArtist }: IProps) => (
  <Container isArtist={isArtist}>
    <Image src={avatar} alt='avatar' width={40} height={40} layout='fixed' />

    <p>
      <b>{name}</b> {content}
    </p>
  </Container>
)

export default Comment
