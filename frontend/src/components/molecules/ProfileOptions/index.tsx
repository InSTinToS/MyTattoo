import { ProfileOptionsStyle } from './styles'

import ArtistHeart from 'components/atoms/icons/ArtistHeart'
import Heart from 'components/atoms/icons/Heart/Heart'

import avatar from '@public/avatar.png'

import Image from 'next/image'
import { useTheme } from 'styled-components'

const ProfileOptions = () => {
  const theme = useTheme()

  return (
    <ProfileOptionsStyle>
      <li>
        <ArtistHeart size={29} color={theme.colors.secondary} />
      </li>

      <li>
        <Heart size={24} color={theme.colors.red} />
      </li>

      <li>
        <Image src={avatar} alt='avatar' width={40} height={40} />
      </li>
    </ProfileOptionsStyle>
  )
}

export default ProfileOptions
