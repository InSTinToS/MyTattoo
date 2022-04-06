import { ProfileOptionsStyle } from './styles'

import ArtistHeart from 'components/atoms/icons/ArtistHeart'
import Heart from 'components/atoms/icons/Heart'

import Image from 'next/image'
import { useTheme } from 'styled-components'

const ProfileOptions = () => {
  const theme = useTheme()

  return (
    <ProfileOptionsStyle>
      <li>
        <ArtistHeart size={25} color={theme.colors.secondary} />
      </li>

      <li>
        <Heart size={25} color={theme.colors.red} />
      </li>

      <li>
        <Image width={46} height={46} alt='avatar' src='/avatar.png' />
      </li>
    </ProfileOptionsStyle>
  )
}

export default ProfileOptions
