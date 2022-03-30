import { Container } from './styles'
import Image from 'next/image'
import React from 'react'
import { useTheme } from 'styled-components'

import ArtistHeart from 'components/atoms/icons/ArtistHeart/ArtistHeart'
import Heart from 'components/atoms/icons/Heart'

import avatar from '@public/avatar.png'

const ProfileOptions = () => {
  const theme = useTheme()

  return (
    <Container>
      <li>
        <ArtistHeart size={29} color={theme.colors.secondary} />
      </li>

      <li>
        <Heart size={24} color={theme.colors.red} />
      </li>

      <li>
        <Image src={avatar} alt='avatar' width={40} height={40} />
      </li>
    </Container>
  )
}

export default ProfileOptions
