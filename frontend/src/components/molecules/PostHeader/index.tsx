import { Container } from './styles'
import Image from 'next/image'
import React from 'react'

interface IProps {
  name: string
  avatar: string
  isArtist: boolean
  description: string
}

const PostHeader = ({ avatar, description, name, isArtist }: IProps) => (
  <Container>
    <Image src={avatar} alt='avatar' width={40} height={40} />

    <div>
      <span>{name}</span>

      {isArtist && <div>Artist</div>}
    </div>

    <p>{description}</p>
  </Container>
)

export default PostHeader
export type { IProps }
