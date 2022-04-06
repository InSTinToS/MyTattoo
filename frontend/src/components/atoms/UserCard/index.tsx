import { UserCardStyle } from './styles'
import type { IUserCardProps } from './types'

import Image from 'next/image'

const UserCard = ({ avatar, name, smallBio, ...props }: IUserCardProps) => {
  return (
    <UserCardStyle {...props}>
      <Image width={46} height={46} src={avatar} alt='avatar' layout='fixed' />

      <span id='name'>{name}</span>

      <span id='smallBio'>{smallBio}</span>
    </UserCardStyle>
  )
}

export default UserCard
